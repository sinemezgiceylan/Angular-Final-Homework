import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
      {
        postId: 1,
        userId: 20,
        categoryId: 5,
        title: "Artists use various mediums to create their work.",
        content: "tortor quis turpis sed ante vivamus tortor",
        viewCount: 1285,
        creationDate: "2018-12-17",
        isPublished: false
      },
      {
        postId: 2,
        userId: 12,
        categoryId: 5,
        title: "Paintings can evoke emotions.",
        content: "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        viewCount: 1439,
        creationDate: "2017-02-01",
        isPublished: true
      },
      {
        postId: 3,
        userId: 18,
        categoryId: 1,
        title: "Sculptures showcase creativity.",
        content: "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend",
        viewCount: 602,
        creationDate: "2019-07-06",
        isPublished: true
      },
      {
        postId: 4,
        userId: 2,
        categoryId: 3,
        title: "Art can be subjective and open to interpretation.",
        content: "bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
        viewCount: 673,
        creationDate: "2021-10-26",
        isPublished: false
      },
      {
        postId: 5,
        userId: 8,
        categoryId: 3,
        title: "Artists use various mediums to create their work.",
        content: "est quam pharetra magna ac consequat",
        viewCount: 803,
        creationDate: "2016-03-18",
        isPublished: true
      },
      {
        postId: 6,
        userId: 17,
        categoryId: 3,
        title: "Paintings can evoke emotions.",
        content: "sit amet nulla quisque",
        viewCount: 1068,
        creationDate: "2022-02-23",
        isPublished: false
      },
      {
        postId: 7,
        userId: 8,
        categoryId: 4,
        title: "Paintings can evoke emotions.",
        content: "erat curabitur gravida nisi at nibh in hac habitasse",
        viewCount: 1230,
        creationDate: "2021-12-21",
        isPublished: true
      },
      {
        postId: 8,
        userId: 11,
        categoryId: 4,
        title: "Paintings can evoke emotions.",
        content: "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa",
        viewCount: 1232,
        creationDate: "2022-04-13",
        isPublished: true
      },
      {
        postId: 9,
        userId: 18,
        categoryId: 2,
        title: "Paintings can evoke emotions.",
        content: "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
        viewCount: 527,
        creationDate: "2016-10-10",
        isPublished: false
      },
      {
        postId: 10,
        userId: 8,
        categoryId: 3,
        title: "Sculptures showcase creativity.",
        content: "in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi",
        viewCount: 691,
        creationDate: "2015-12-09",
        isPublished: false
      },
      {
        postId: 11,
        userId: 20,
        categoryId: 4,
        title: "Sculptures showcase creativity.",
        content: "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
        viewCount: 1050,
        creationDate: "2016-04-15",
        isPublished: true
      },
      {
        postId: 12,
        userId: 8,
        categoryId: 1,
        title: "Art can be subjective and open to interpretation.",
        content: "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum",
        viewCount: 1439,
        creationDate: "2022-04-09",
        isPublished: true
      },
      {
        postId: 13,
        userId: 20,
        categoryId: 1,
        title: "Paintings can evoke emotions.",
        content: "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper",
        viewCount: 501,
        creationDate: "2016-07-12",
        isPublished: true
      },
      {
        postId: 14,
        userId: 14,
        categoryId: 2,
        title: "Art can be subjective and open to interpretation.",
        content: "sit amet sapien dignissim vestibulum vestibulum",
        viewCount: 1496,
        creationDate: "2020-03-24",
        isPublished: true
      },
      {
        postId: 15,
        userId: 4,
        categoryId: 5,
        title: "Artists use various mediums to create their work.",
        content: "convallis nulla neque libero convallis eget eleifend luctus ultricies",
        viewCount: 1160,
        creationDate: "2020-11-03",
        isPublished: true
      },
      {
        postId: 16,
        userId: 9,
        categoryId: 5,
        title: "Paintings can evoke emotions.",
        content: "in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
        viewCount: 714,
        creationDate: "2017-10-30",
        isPublished: true
      },
      {
        postId: 17,
        userId: 6,
        categoryId: 1,
        title: "Sculptures showcase creativity.",
        content: "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id",
        viewCount: 777,
        creationDate: "2018-01-13",
        isPublished: true
      },
      {
        postId: 18,
        userId: 12,
        categoryId: 3,
        title: "Art is a form of expression.",
        content: "massa",
        viewCount: 1042,
        creationDate: "2018-12-07",
        isPublished: true
      },
      {
        postId: 19,
        userId: 13,
        categoryId: 1,
        title: "Art is a form of expression.",
        content: "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
        viewCount: 1004,
        creationDate: "2016-01-24",
        isPublished: false
      },
      {
        postId: 20,
        userId: 7,
        categoryId: 5,
        title: "Art is a form of expression.",
        content: "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
        viewCount: 1358,
        creationDate: "2022-01-07",
        isPublished: false
      },
      {
        postId: 21,
        userId: 6,
        categoryId: 2,
        title: "Sculptures showcase creativity.",
        content: "nibh in hac",
        viewCount: 1152,
        creationDate: "2017-08-06",
        isPublished: false
      },
      {
        postId: 22,
        userId: 18,
        categoryId: 5,
        title: "Art is a form of expression.",
        content: "enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu",
        viewCount: 1322,
        creationDate: "2016-10-20",
        isPublished: false
      },
      {
        postId: 23,
        userId: 13,
        categoryId: 5,
        title: "Paintings can evoke emotions.",
        content: "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur",
        viewCount: 1118,
        creationDate: "2017-06-10",
        isPublished: true
      },
      {
        postId: 24,
        userId: 2,
        categoryId: 3,
        title: "Art can be subjective and open to interpretation.",
        content: "nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
        viewCount: 834,
        creationDate: "2019-01-22",
        isPublished: true
      },
      {
        postId: 25,
        userId: 5,
        categoryId: 3,
        title: "Paintings can evoke emotions.",
        content: "lorem ipsum dolor sit amet consectetuer adipiscing",
        viewCount: 1144,
        creationDate: "2021-10-02",
        isPublished: true
      },
      {
        postId: 26,
        userId: 12,
        categoryId: 1,
        title: "Art is a form of expression.",
        content: "pulvinar lobortis est phasellus sit",
        viewCount: 538,
        creationDate: "2022-07-07",
        isPublished: true
      },
      {
        postId: 27,
        userId: 13,
        categoryId: 1,
        title: "Paintings can evoke emotions.",
        content: "in felis donec semper sapien a libero nam dui proin leo",
        viewCount: 856,
        creationDate: "2017-12-15",
        isPublished: false
      },
      {
        postId: 28,
        userId: 19,
        categoryId: 2,
        title: "Art can be subjective and open to interpretation.",
        content: "nunc nisl",
        viewCount: 790,
        creationDate: "2020-04-13",
        isPublished: true
      },
      {
        postId: 29,
        userId: 15,
        categoryId: 5,
        title: "Paintings can evoke emotions.",
        content: "sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
        viewCount: 932,
        creationDate: "2018-12-09",
        isPublished: false
      },
      {
        postId: 30,
        userId: 1,
        categoryId: 2,
        title: "Artists use various mediums to create their work.",
        content: "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
        viewCount: 1388,
        creationDate: "2015-11-17",
        isPublished: true
      },
      {
        postId: 31,
        userId: 7,
        categoryId: 1,
        title: "Art is a form of expression.",
        content: "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
        viewCount: 850,
        creationDate: "2018-08-09",
        isPublished: true
      },
      {
        postId: 32,
        userId: 13,
        categoryId: 1,
        title: "Paintings can evoke emotions.",
        content: "velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
        viewCount: 1026,
        creationDate: "2016-08-20",
        isPublished: true
      },
      {
        postId: 33,
        userId: 11,
        categoryId: 5,
        title: "Art is a form of expression.",
        content: "condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra",
        viewCount: 831,
        creationDate: "2020-10-15",
        isPublished: true
      },
      {
        postId: 34,
        userId: 2,
        categoryId: 3,
        title: "Sculptures showcase creativity.",
        content: "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
        viewCount: 1072,
        creationDate: "2018-04-26",
        isPublished: true
      },
      {
        postId: 35,
        userId: 4,
        categoryId: 3,
        title: "Artists use various mediums to create their work.",
        content: "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit",
        viewCount: 1110,
        creationDate: "2018-06-29",
        isPublished: false
      },
      {
        postId: 36,
        userId: 7,
        categoryId: 1,
        title: "Sculptures showcase creativity.",
        content: "porta volutpat erat quisque erat eros viverra",
        viewCount: 1410,
        creationDate: "2022-03-21",
        isPublished: true
      },
      {
        postId: 37,
        userId: 14,
        categoryId: 1,
        title: "Art can be subjective and open to interpretation.",
        content: "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis",
        viewCount: 569,
        creationDate: "2020-07-30",
        isPublished: false
      },
      {
        postId: 38,
        userId: 1,
        categoryId: 5,
        title: "Sculptures showcase creativity.",
        content: "non velit nec nisi vulputate",
        viewCount: 1140,
        creationDate: "2017-05-15",
        isPublished: false
      },
      {
        postId: 39,
        userId: 14,
        categoryId: 4,
        title: "Art is a form of expression.",
        content: "est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
        viewCount: 1094,
        creationDate: "2016-11-19",
        isPublished: true
      },
      {
        postId: 40,
        userId: 3,
        categoryId: 2,
        title: "Artists use various mediums to create their work.",
        content: "consequat dui nec nisi",
        viewCount: 1308,
        creationDate: "2019-09-29",
        isPublished: false
      },
      {
        postId: 41,
        userId: 16,
        categoryId: 5,
        title: "Artists use various mediums to create their work.",
        content: "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
        viewCount: 1272,
        creationDate: "2019-01-27",
        isPublished: true
      },
      {
        postId: 42,
        userId: 8,
        categoryId: 5,
        title: "Paintings can evoke emotions.",
        content: "pharetra",
        viewCount: 677,
        creationDate: "2021-07-16",
        isPublished: true
      },
      {
        postId: 43,
        userId: 18,
        categoryId: 5,
        title: "Sculptures showcase creativity.",
        content: "mattis egestas metus aenean fermentum donec ut",
        viewCount: 644,
        creationDate: "2018-03-31",
        isPublished: false
      },
      {
        postId: 44,
        userId: 4,
        categoryId: 1,
        title: "Art is a form of expression.",
        content: "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum",
        viewCount: 676,
        creationDate: "2021-09-19",
        isPublished: true
      },
      {
        postId: 45,
        userId: 7,
        categoryId: 2,
        title: "Paintings can evoke emotions.",
        content: "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
        viewCount: 1053,
        creationDate: "2018-12-12",
        isPublished: true
      },
      {
        postId: 46,
        userId: 5,
        categoryId: 4,
        title: "Sculptures showcase creativity.",
        content: "aenean sit amet justo morbi ut odio cras mi pede",
        viewCount: 1177,
        creationDate: "2020-01-03",
        isPublished: true
      },
      {
        postId: 47,
        userId: 5,
        categoryId: 1,
        title: "Sculptures showcase creativity.",
        content: "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et",
        viewCount: 919,
        creationDate: "2018-03-13",
        isPublished: false
      },
      {
        postId: 48,
        userId: 9,
        categoryId: 2,
        title: "Paintings can evoke emotions.",
        content: "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam",
        viewCount: 1488,
        creationDate: "2020-08-19",
        isPublished: true
      },
      {
        postId: 49,
        userId: 20,
        categoryId: 4,
        title: "Art can be subjective and open to interpretation.",
        content: "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
        viewCount: 1247,
        creationDate: "2021-12-03",
        isPublished: false
      },
      {
        postId: 50,
        userId: 3,
        categoryId: 2,
        title: "Art is a form of expression.",
        content: "orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam",
        viewCount: 527,
        creationDate: "2020-03-08",
        isPublished: true
      },
      {
        postId: 51,
        userId: 3,
        categoryId: 4,
        title: "Paintings can evoke emotions.",
        content: "ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
        viewCount: 599,
        creationDate: "2017-02-14",
        isPublished: false
      },
      {
        postId: 52,
        userId: 17,
        categoryId: 4,
        title: "Sculptures showcase creativity.",
        content: "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in",
        viewCount: 1055,
        creationDate: "2018-04-14",
        isPublished: true
      },
      {
        postId: 53,
        userId: 12,
        categoryId: 3,
        title: "Artists use various mediums to create their work.",
        content: "nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc",
        viewCount: 1243,
        creationDate: "2021-10-13",
        isPublished: false
      },
      {
        postId: 54,
        userId: 16,
        categoryId: 2,
        title: "Art is a form of expression.",
        content: "blandit non interdum in ante vestibulum ante ipsum primis",
        viewCount: 628,
        creationDate: "2017-09-26",
        isPublished: true
      },
      {
        postId: 55,
        userId: 16,
        categoryId: 4,
        title: "Art is a form of expression.",
        content: "maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut",
        viewCount: 759,
        creationDate: "2022-02-24",
        isPublished: false
      },
      {
        postId: 56,
        userId: 19,
        categoryId: 2,
        title: "Art can be subjective and open to interpretation.",
        content: "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla",
        viewCount: 1224,
        creationDate: "2017-11-19",
        isPublished: true
      },
      {
        postId: 57,
        userId: 18,
        categoryId: 4,
        title: "Art can be subjective and open to interpretation.",
        content: "fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi",
        viewCount: 1145,
        creationDate: "2018-04-08",
        isPublished: true
      },
      {
        postId: 58,
        userId: 15,
        categoryId: 4,
        title: "Sculptures showcase creativity.",
        content: "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
        viewCount: 1051,
        creationDate: "2017-05-03",
        isPublished: true
      },
      {
        postId: 59,
        userId: 13,
        categoryId: 2,
        title: "Art is a form of expression.",
        content: "consequat nulla nisl nunc",
        viewCount: 1307,
        creationDate: "2020-08-21",
        isPublished: true
      },
      {
        postId: 60,
        userId: 15,
        categoryId: 1,
        title: "Art is a form of expression.",
        content: "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas",
        viewCount: 1418,
        creationDate: "2016-07-29",
        isPublished: true
      },
      {
        postId: 61,
        userId: 7,
        categoryId: 5,
        title: "Art is a form of expression.",
        content: "at lorem integer tincidunt ante vel ipsum",
        viewCount: 1402,
        creationDate: "2021-12-24",
        isPublished: true
      },
      {
        postId: 62,
        userId: 18,
        categoryId: 4,
        title: "Art can be subjective and open to interpretation.",
        content: "at turpis a pede posuere nonummy integer non velit donec",
        viewCount: 1042,
        creationDate: "2017-03-22",
        isPublished: false
      },
      {
        postId: 63,
        userId: 10,
        categoryId: 4,
        title: "Paintings can evoke emotions.",
        content: "nisi volutpat eleifend donec ut dolor morbi vel lectus in",
        viewCount: 1237,
        creationDate: "2022-03-12",
        isPublished: true
      },
      {
        postId: 64,
        userId: 18,
        categoryId: 3,
        title: "Paintings can evoke emotions.",
        content: "ligula suspendisse ornare consequat lectus in est risus",
        viewCount: 715,
        creationDate: "2017-11-14",
        isPublished: false
      },
      {
        postId: 65,
        userId: 4,
        categoryId: 2,
        title: "Sculptures showcase creativity.",
        content: "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
        viewCount: 1420,
        creationDate: "2022-03-25",
        isPublished: true
      },
      {
        postId: 66,
        userId: 1,
        categoryId: 1,
        title: "Artists use various mediums to create their work.",
        content: "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
        viewCount: 1113,
        creationDate: "2021-10-26",
        isPublished: false
      },
      {
        postId: 67,
        userId: 8,
        categoryId: 3,
        title: "Art can be subjective and open to interpretation.",
        content: "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient",
        viewCount: 502,
        creationDate: "2020-11-01",
        isPublished: true
      },
      {
        postId: 68,
        userId: 19,
        categoryId: 3,
        title: "Art can be subjective and open to interpretation.",
        content: "congue elementum in hac",
        viewCount: 833,
        creationDate: "2019-07-27",
        isPublished: true
      },
      {
        postId: 69,
        userId: 7,
        categoryId: 5,
        title: "Art can be subjective and open to interpretation.",
        content: "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus",
        viewCount: 669,
        creationDate: "2016-07-28",
        isPublished: true
      },
      {
        postId: 70,
        userId: 7,
        categoryId: 2,
        title: "Paintings can evoke emotions.",
        content: "erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at",
        viewCount: 960,
        creationDate: "2022-03-14",
        isPublished: true
      },
      {
        postId: 71,
        userId: 18,
        categoryId: 1,
        title: "Paintings can evoke emotions.",
        content: "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
        viewCount: 1451,
        creationDate: "2017-03-06",
        isPublished: true
      },
      {
        postId: 72,
        userId: 7,
        categoryId: 4,
        title: "Art can be subjective and open to interpretation.",
        content: "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
        viewCount: 1484,
        creationDate: "2017-05-02",
        isPublished: true
      },
      {
        postId: 73,
        userId: 15,
        categoryId: 2,
        title: "Art can be subjective and open to interpretation.",
        content: "nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
        viewCount: 1219,
        creationDate: "2022-01-11",
        isPublished: true
      },
      {
        postId: 74,
        userId: 5,
        categoryId: 3,
        title: "Art is a form of expression.",
        content: "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
        viewCount: 1424,
        creationDate: "2018-12-21",
        isPublished: true
      },
      {
        postId: 75,
        userId: 5,
        categoryId: 5,
        title: "Sculptures showcase creativity.",
        content: "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel",
        viewCount: 784,
        creationDate: "2017-03-01",
        isPublished: true
      },
      {
        postId: 76,
        userId: 19,
        categoryId: 3,
        title: "Artists use various mediums to create their work.",
        content: "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue",
        viewCount: 1314,
        creationDate: "2018-12-08",
        isPublished: true
      },
      {
        postId: 77,
        userId: 14,
        categoryId: 5,
        title: "Artists use various mediums to create their work.",
        content: "in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque",
        viewCount: 1403,
        creationDate: "2016-02-24",
        isPublished: false
      },
      {
        postId: 78,
        userId: 4,
        categoryId: 5,
        title: "Artists use various mediums to create their work.",
        content: "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
        viewCount: 922,
        creationDate: "2021-05-15",
        isPublished: true
      },
      {
        postId: 79,
        userId: 4,
        categoryId: 3,
        title: "Sculptures showcase creativity.",
        content: "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales",
        viewCount: 1158,
        creationDate: "2020-01-26",
        isPublished: true
      },
      {
        postId: 80,
        userId: 1,
        categoryId: 1,
        title: "Art is a form of expression.",
        content: "cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget",
        viewCount: 1330,
        creationDate: "2020-07-13",
        isPublished: true
      },
      {
        postId: 81,
        userId: 7,
        categoryId: 5,
        title: "Sculptures showcase creativity.",
        content: "a",
        viewCount: 1154,
        creationDate: "2019-10-11",
        isPublished: true
      },
      {
        postId: 82,
        userId: 6,
        categoryId: 5,
        title: "Artists use various mediums to create their work.",
        content: "pede lobortis ligula sit amet",
        viewCount: 1185,
        creationDate: "2018-09-04",
        isPublished: false
      },
      {
        postId: 83,
        userId: 2,
        categoryId: 3,
        title: "Paintings can evoke emotions.",
        content: "vitae consectetuer",
        viewCount: 1017,
        creationDate: "2016-09-03",
        isPublished: false
      },
      {
        postId: 84,
        userId: 12,
        categoryId: 5,
        title: "Paintings can evoke emotions.",
        content: "tortor id nulla ultrices",
        viewCount: 1241,
        creationDate: "2016-03-22",
        isPublished: true
      },
      {
        postId: 85,
        userId: 18,
        categoryId: 3,
        title: "Art can be subjective and open to interpretation.",
        content: "pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum",
        viewCount: 1290,
        creationDate: "2016-10-04",
        isPublished: true
      },
      {
        postId: 86,
        userId: 9,
        categoryId: 3,
        title: "Artists use various mediums to create their work.",
        content: "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam",
        viewCount: 1176,
        creationDate: "2016-01-03",
        isPublished: false
      },
      {
        postId: 87,
        userId: 2,
        categoryId: 1,
        title: "Paintings can evoke emotions.",
        content: "ipsum ac tellus semper interdum mauris",
        viewCount: 655,
        creationDate: "2017-12-17",
        isPublished: false
      },
      {
        postId: 88,
        userId: 17,
        categoryId: 3,
        title: "Art can be subjective and open to interpretation.",
        content: "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis",
        viewCount: 636,
        creationDate: "2016-11-18",
        isPublished: false
      },
      {
        postId: 89,
        userId: 5,
        categoryId: 2,
        title: "Art can be subjective and open to interpretation.",
        content: "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae",
        viewCount: 1211,
        creationDate: "2016-05-17",
        isPublished: true
      },
      {
        postId: 90,
        userId: 18,
        categoryId: 4,
        title: "Artists use various mediums to create their work.",
        content: "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis",
        viewCount: 1422,
        creationDate: "2016-06-21",
        isPublished: true
      },
      {
        postId: 91,
        userId: 14,
        categoryId: 1,
        title: "Art is a form of expression.",
        content: "rhoncus dui vel sem sed sagittis nam congue risus",
        viewCount: 1427,
        creationDate: "2018-07-01",
        isPublished: false
      },
      {
        postId: 92,
        userId: 8,
        categoryId: 1,
        title: "Artists use various mediums to create their work.",
        content: "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id",
        viewCount: 1165,
        creationDate: "2020-12-24",
        isPublished: true
      },
      {
        postId: 93,
        userId: 18,
        categoryId: 1,
        title: "Sculptures showcase creativity.",
        content: "praesent lectus",
        viewCount: 1106,
        creationDate: "2019-09-26",
        isPublished: true
      },
      {
        postId: 94,
        userId: 10,
        categoryId: 2,
        title: "Paintings can evoke emotions.",
        content: "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
        viewCount: 911,
        creationDate: "2021-02-07",
        isPublished: true
      },
      {
        postId: 95,
        userId: 12,
        categoryId: 1,
        title: "Sculptures showcase creativity.",
        content: "ullamcorper purus sit",
        viewCount: 975,
        creationDate: "2021-09-15",
        isPublished: false
      },
      {
        postId: 96,
        userId: 1,
        categoryId: 3,
        title: "Art can be subjective and open to interpretation.",
        content: "lacinia sapien quis libero nullam",
        viewCount: 1255,
        creationDate: "2022-04-08",
        isPublished: false
      },
      {
        postId: 97,
        userId: 5,
        categoryId: 1,
        title: "Paintings can evoke emotions.",
        content: "justo morbi ut odio cras mi pede malesuada in imperdiet et commodo",
        viewCount: 1015,
        creationDate: "2020-04-18",
        isPublished: false
      },
      {
        postId: 98,
        userId: 4,
        categoryId: 3,
        title: "Sculptures showcase creativity.",
        content: "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est",
        viewCount: 891,
        creationDate: "2016-06-24",
        isPublished: true
      },
      {
        postId: 99,
        userId: 7,
        categoryId: 1,
        title: "Artists use various mediums to create their work.",
        content: "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
        viewCount: 1017,
        creationDate: "2020-07-08",
        isPublished: true
      },
      {
        postId: 100,
        userId: 6,
        categoryId: 1,
        title: "Art can be subjective and open to interpretation.",
        content: "sit amet diam",
        viewCount: 810,
        creationDate: "2022-03-29",
        isPublished: true
      }
  ];

  constructor() { }

  getPostList() : Post[] {
    return this.posts
  }

  getPostItem(postId: number): Post | undefined {
    return this.posts.find((post : Post, index: number) => {
      return post.postId === postId;
    })
  }

  deleteUserItem(id: Number) : void {
    this.posts = this.posts.filter((post) => post.postId !== id);
  }

  addPostItem(postItem: Post) : void {
    postItem.postId = this.posts.length + 1;
    this.posts.push(postItem);
  }

  updatePostItem(postItem: Post) {
    this.posts = this.posts.map(post => {
      if(post.postId === postItem.postId)
        post = postItem;
      return post;
    })
  }

}
