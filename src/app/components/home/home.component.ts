import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/Project";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  projects: Project[] = [
    {
      name: "Kornerstore",
      thumbnail: "https://imgur.com/hJMMmbO.jpg",
      url: "https://kornerstore.herokuapp.com",
      codeUrl: "https://github.com/CesarAHernandez/ecommerce-concept",
      technologies: [
        {
          name: "React.js",
          icon: "Some Icon",
        },
        {
          name: "Blade Template",
          icon: "Some Icon",
        },
        {
          name: "PHP/Laravel",
          icon: "Some Icon",
        },
        {
          name: "SCSS",
          icon: "Some Icon",
        },
      ],
      description:
        "A modern take on the E-commerce Experience. Using PHP as the back-bone along with React for creating a fluid User Experience",
    },
    {
      name: "Invoice Manager",
      thumbnail: "https://i.imgur.com/bIqo01M.png",
      url: "https://invoicemanager-rem.herokuapp.com/",
      codeUrl: "https://github.com/CesarAHernandez/invoice_manager_server",
      technologies: [
        {
          name: "Node.js + Express",
          icon: "Some Icon",
        },
        {
          name: "React.js",
          icon: "Some Icon",
        },
        {
          name: "Stripe",
          icon: "Some Icon",
        },
        {
          name: "PayPal",
          icon: "Some Icon",
        },
        {
          name: "Twillio",
          icon: "Some Icon",
        },
        {
          name: "UiKit",
          icon: "Some Icon",
        },
      ],
      description:
        "A feature plentiful Invoice Manager. Designed for the small businesses in mind. You can add a user to your database, make invoices, and have the client pay all in one web app.",
    },
    {
      name: "Client Panel",
      thumbnail: "https://i.imgur.com/oVbL3WJ.png",
      url: "https://clientpanelprod-e68a8.firebaseapp.com/",
      codeUrl: "https://github.com/CesarAHernandez/clientpanel",
      technologies: [
        {
          name: "Angular",
          icon: "Some Icon",
        },
        {
          name: "Bootstrap",
          icon: "Some Icon",
        },
        {
          name: "Firebase",
          icon: "Some Icon",
        },
      ],
      description:
        "Simple Angular App used as a concept for a Client Panel. Modular Simple and Creative",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
