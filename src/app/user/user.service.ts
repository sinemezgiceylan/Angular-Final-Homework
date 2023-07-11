import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    
  {
    userId: 1,
    username: "ispenton0",
    email: "mlarrat0@netvibes.com",
    creationDate: "2022-01-22",
    isActive: false
  },
  {
    userId: 2,
    username: "kfere1",
    email: "kmacgovern1@spiegel.de",
    creationDate: "2015-12-25",
    isActive: false
  },
  {
    userId: 3,
    username: "wstamp2",
    email: "eamies2@biglobe.ne.jp",
    creationDate: "2020-10-18",
    isActive: true
  },
  {
    userId: 4,
    username: "rgoncaves3",
    email: "eofficer3@foxnews.com",
    creationDate: "2020-04-03",
    isActive: true
  },
  {
    userId: 5,
    username: "jumpleby4",
    email: "flamperti4@booking.com",
    creationDate: "2021-08-04",
    isActive: false
  },
  {
    userId: 6,
    username: "rpearlman5",
    email: "jpablo5@salon.com",
    creationDate: "2020-08-11",
    isActive: false
  },
  {
    userId: 7,
    username: "lnanetti6",
    email: "cdinnage6@goo.gl",
    creationDate: "2019-12-29",
    isActive: false
  },
  {
    userId: 8,
    username: "gpaulmann7",
    email: "kbilbrey7@indiatimes.com",
    creationDate: "2016-03-27",
    isActive: true
  },
  {
    userId: 9,
    username: "awhyatt8",
    email: "balwen8@i2i.jp",
    creationDate: "2022-01-18",
    isActive: true
  },
  {
    userId: 10,
    username: "eporker9",
    email: "qlissandrini9@theatlantic.com",
    creationDate: "2017-06-01",
    isActive: true
  },
  {
    userId: 11,
    username: "gklaesa",
    email: "obrowninga@earthlink.net",
    creationDate: "2015-09-04",
    isActive: true
  },
  {
    userId: 12,
    username: "glebelb",
    email: "gwoodthorpeb@domainmarket.com",
    creationDate: "2015-09-14",
    isActive: false
  },
  {
    userId: 13,
    username: "kgregsonc",
    email: "nhutchisonc@nhs.uk",
    creationDate: "2020-10-05",
    isActive: true
  },
  {
    userId: 14,
    username: "agoodricked",
    email: "pcomod@infoseek.co.jp",
    creationDate: "2019-10-22",
    isActive: true
  },
  {
    userId: 15,
    username: "sbonnairee",
    email: "kreevese@pbs.org",
    creationDate: "2017-04-28",
    isActive: false
  },
  {
    userId: 16,
    username: "haickenf",
    email: "droastf@deviantart.com",
    creationDate: "2020-07-04",
    isActive: true
  },
  {
    userId: 17,
    username: "olemmertzg",
    email: "truseg@tumblr.com",
    creationDate: "2021-06-15",
    isActive: false
  },
  {
    userId: 18,
    username: "crufflih",
    email: "bmacvicarh@infoseek.co.jp",
    creationDate: "2022-04-24",
    isActive: true
  },
  {
    userId: 19,
    username: "edaveti",
    email: "rduvali@newyorker.com",
    creationDate: "2019-12-12",
    isActive: true
  },
  {
    userId: 20,
    username: "blavistej",
    email: "krobertsj@examiner.com",
    creationDate: "2016-07-05",
    isActive: false
  }
  ];

  constructor() { }

  getUserList() : User[] {
    return this.users;
  }

  addUserItem(userItem: User) : void {
    userItem.userId = this.users.length + 1;
    this.users.push(userItem);
  }

  getUserItem(userId: number): User | undefined {
    return this.users.find((user: User, index: number) => {
      return user.userId === userId;
    })
  }

  deleteUserItem(id: Number) : void {
    this.users = this.users.filter((user) => user.userId !== id);
  }

  updateUserItem(userItem: User) {
    this.users = this.users.map(user => {
      if(user.userId === userItem.userId)
        user = userItem;
      return user;
    })
  }
}

