import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  Box1 = [
    {
      title: 'RESTAURANTS',
      text1: 'Order Online',
      text2: 'Book Table',
      text3: 'Trending',
      text4: 'More ...',
      imagelink: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/restaurant.jpg'
    },
    {
      title: 'SHOP ONLINE',
      text1: 'Mobile',
      text2: 'Televisions',
      text3: 'Air Conditioners',
      text4: 'More ...',
      imagelink: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/shopfront.jpg'

    }
  ];

  Box2 = [
    {
      title: 'DAILY NEEDS',
      text1: 'Grocery  ',
      text2: 'Chemists',
      text3: 'Bakery',
      text4: 'More ...',
      imagelink: 'https://akam2.cdn.jdmagicbox.com/images/icontent/jdrwd_new/daily.jpg?interpolation=lanczos-none&output-format=jpg&resize=164:160&crop=164:160px;*,*'
    },
    {
      title: 'DOCTORS',
      text1: 'Dentists',
      text2: 'Dermatologists',
      text3: 'ENT',
      text4: 'More ...',
      imagelink: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/Doctors.jpg'
    }
  ];

  Box3 = [
    {
      title: 'TRAVEL',
      text1: 'Flights',
      text2: 'Bus',
      text3: 'Hotels',
      text4: 'Car Rentals',
      imagelink: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/travel.jpg'
    },
    {
      title: 'REPAIRS',
      text1: 'Laptops',
      text2: 'Mobile Phones',
      text3: 'Washing Machine',
      text4: 'More ...',
      imagelink: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/repairs.jpg'

    }
  ];

  Box4 = [
    {
      title: 'LOANS',
      text1: 'Personel Loans  ',
      text2: 'Car Loans',
      text3: 'Home Loans',
      text4: 'Credit Cards',
      imagelink: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/loans.jpg'
    },
    {
      title: 'AUTO MOBILES',
      text1: 'New Cars',
      text2: 'Used Cars',
      text3: 'Car Insurance',
      text4: 'Driving Insurance ',
      imagelink: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/automobile.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
