import { Component, OnInit } from "@angular/core";
import { CampaignService } from "../services/campaign.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FundsService } from "../services/funds.service";
import { AuthService } from "../services/auth.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
// import { FlutterwaveCheckout } from 'flutterwave';

@Component({
  selector: "app-pledge",
  templateUrl: "./pledge.component.html",
  styleUrls: ["./pledge.component.css"],
})
export class PledgeComponent implements OnInit {
  pledgePost = {
    funds: {
      campaign_id: 0,
      rewards_id: 0,
      backer_id: 0,
      amount: 0,
    },
    rewards_amount: 0,
  };
  pledgeWtRewards = {
    funds: {
      campaign_id: 0,
      backer_id: 0,
      amount: 0,
    },
    rewards_amount: 0,
  };

  pledgeWithoutReward = 0;

  successful: boolean;
  error: boolean;
  session: any;
  days_to_go;
  rewards: any;
  comments: any;
  story = [];
  faqs: any;
  camp = [];
  user_id;
  cantaccess: boolean = false;
  funds_id;

  constructor(
    public http: HttpClient,
    private authService: AuthService,
    public fundsService: FundsService,
    public campaignService: CampaignService,
    private router: Router,
    public route: ActivatedRoute
    // public flutterwaveCheckout: FlutterwaveCheckout
    
  ) {}

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.authService.getUserId().subscribe((data: any) => {
        if (data.status == "1") {
          this.user_id = data.user_id;
        } else {
          this.router.navigate(["login"]);
        }
      });
    }

    // this.loadStripe();

    this.campaignService
      .getCampaignById(this.route.snapshot.paramMap.get("campaign_id"))
      .subscribe((data: any) => {
        if (data.campaign.status != "failed") {
          this.camp = data.campaign;
          this.days_to_go = data.days_to_go;
          this.rewards = data.rewards;
          this.comments = data.comments;
          this.story = data.story;
          this.faqs = data.faqs;
          console.log(data);
        } else {
          this.cantaccess = true;
        }
      });
  }

  pay(amount: any, reward_id: any) {
    let handler = (<any>window).FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-332e6f6722f3f1524222d658cbe6e24a-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: amount,
      currency: "UGX",
      // payment_options: "card, mobilemoneyuganda, bank, ussd",
      redirect_url: () => {
        this.router.navigate(["/success"]);
      },
    customer: {
      email: "emenyujoel2000@gmail.com",
      phone_number: "",
      name: "",
    },
    customizations: {
      title: "CCDG",
      description: "A hand that gives is a hand that receives",
      // logo: "#",
    },
      locale: "auto",
      token: (token: any) => {

        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        this.fundsService
          .flutterwavePayment({ token: token, amount: amount })
          .subscribe(
            (res) => {
              console.log(res);
              this.pledge(amount, reward_id);
            },
            (err) => {
              console.log(err);
            }
          );
      },
    });
    console.log("im still here");

    handler.open({
      name: "CrowdFunding",
      description: "Support this campaign.",
      currency: "UGX",
      amount: amount * 100,
      billingAddress: true,
      shippingAddress: true,
    });
  }

  testFunction() {
    console.log("Test Function calledd!!!!");
  }

  goToLearnMore() {
    this.router.navigate(["learn-more/" + this.camp[0].campaign_id]);
  }

  pledge(amount, rewards_id) {
    // this.pledgePost.backer_id=this.user.id
    // current loggedin user's id
    if (rewards_id != 0) {
      this.pledgePost.funds.backer_id = this.user_id;
      this.pledgePost.funds.campaign_id = this.camp[0].campaign_id;
      this.pledgePost.funds.rewards_id = rewards_id;
      this.pledgePost.rewards_amount = amount;
      this.pledgePost.funds.amount = amount;
      this.fundsService.pledge(this.pledgePost).subscribe((data: any) => {
        console.log(data);
        if (data.status == "1") {
          console.log("done");
          this.successful = true;
          this.router.navigate(["/success"]);
        } else {
          // alert("something went wrong");
          
          this.error = true;
        }
      });
    } else if (rewards_id == 0) {
      this.pledgeWtRewards.funds.backer_id = this.user_id;
      this.pledgeWtRewards.funds.campaign_id = this.camp[0].campaign_id;
      this.pledgeWtRewards.rewards_amount = amount;
      this.pledgeWtRewards.funds.amount = amount;
      this.fundsService
        .pledgeWithoutRewards(this.pledgeWtRewards)
        .subscribe((data: any) => {
          console.log(data);
          if (data.status == "1") {
            console.log("done");

            this.successful = true;
            this.router.navigate(["/success"]);
          } else {
            // alert("something went wrong");
            this.error = true;
          }
        });
    }
  }

}
 