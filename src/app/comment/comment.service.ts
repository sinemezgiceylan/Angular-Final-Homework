import { Injectable } from '@angular/core';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments: Comment[] = [
      {
        commentId: 1,
        postId: 2,
        userId: 16,
        comment: "Lasiodora parahybana",
        creationDate: "2016-08-18",
        isConfirmed: true
      },
      {
        commentId: 2,
        postId: 94,
        userId: 2,
        comment: "Phalaropus fulicarius",
        creationDate: "2017-10-19",
        isConfirmed: false
      },
      {
        commentId: 3,
        postId: 24,
        userId: 8,
        comment: "Dicrostonyx groenlandicus",
        creationDate: "2020-01-03",
        isConfirmed: true
      },
      {
        commentId: 4,
        postId: 10,
        userId: 18,
        comment: "Bos taurus",
        creationDate: "2016-11-12",
        isConfirmed: true
      },
      {
        commentId: 5,
        postId: 97,
        userId: 10,
        comment: "Vulpes vulpes",
        creationDate: "2017-02-04",
        isConfirmed: false
      },
      {
        commentId: 6,
        postId: 23,
        userId: 12,
        comment: "Phoenicopterus ruber",
        creationDate: "2019-10-30",
        isConfirmed: true
      },
      {
        commentId: 7,
        postId: 1,
        userId: 17,
        comment: "Papio cynocephalus",
        creationDate: "2018-08-03",
        isConfirmed: true
      },
      {
        commentId: 8,
        postId: 63,
        userId: 5,
        comment: "Alcelaphus buselaphus cokii",
        creationDate: "2022-06-01",
        isConfirmed: false
      },
      {
        commentId: 9,
        postId: 33,
        userId: 12,
        comment: "Anser anser",
        creationDate: "2020-07-05",
        isConfirmed: true
      },
      {
        commentId: 10,
        postId: 13,
        userId: 17,
        comment: "Acrobates pygmaeus",
        creationDate: "2018-04-16",
        isConfirmed: false
      },
      {
        commentId: 11,
        postId: 72,
        userId: 17,
        comment: "Macaca radiata",
        creationDate: "2020-05-11",
        isConfirmed: false
      },
      {
        commentId: 12,
        postId: 61,
        userId: 9,
        comment: "Kobus leche robertsi",
        creationDate: "2017-03-12",
        isConfirmed: true
      },
      {
        commentId: 13,
        postId: 51,
        userId: 11,
        comment: "Dendrocitta vagabunda",
        creationDate: "2016-06-01",
        isConfirmed: false
      },
      {
        commentId: 14,
        postId: 59,
        userId: 14,
        comment: "Pytilia melba",
        creationDate: "2021-12-02",
        isConfirmed: false
      },
      {
        commentId: 15,
        postId: 1,
        userId: 11,
        comment: "Speothos vanaticus",
        creationDate: "2015-08-28",
        isConfirmed: false
      },
      {
        commentId: 16,
        postId: 94,
        userId: 8,
        comment: "Eudyptula minor",
        creationDate: "2017-08-16",
        isConfirmed: false
      },
      {
        commentId: 17,
        postId: 99,
        userId: 1,
        comment: "Coendou prehensilis",
        creationDate: "2019-10-01",
        isConfirmed: false
      },
      {
        commentId: 18,
        postId: 77,
        userId: 5,
        comment: "Paraxerus cepapi",
        creationDate: "2022-03-21",
        isConfirmed: true
      },
      {
        commentId: 19,
        postId: 48,
        userId: 1,
        comment: "Ovis ammon",
        creationDate: "2019-12-24",
        isConfirmed: false
      },
      {
        commentId: 20,
        postId: 30,
        userId: 4,
        comment: "Melanerpes erythrocephalus",
        creationDate: "2018-08-27",
        isConfirmed: false
      },
      {
        commentId: 21,
        postId: 15,
        userId: 14,
        comment: "Lycaon pictus",
        creationDate: "2019-02-25",
        isConfirmed: true
      },
      {
        commentId: 22,
        postId: 89,
        userId: 3,
        comment: "Oncorhynchus nerka",
        creationDate: "2016-12-14",
        isConfirmed: true
      },
      {
        commentId: 23,
        postId: 14,
        userId: 14,
        comment: "Damaliscus dorcas",
        creationDate: "2017-02-01",
        isConfirmed: false
      },
      {
        commentId: 24,
        postId: 37,
        userId: 17,
        comment: "Laniaurius atrococcineus",
        creationDate: "2019-03-03",
        isConfirmed: true
      },
      {
        commentId: 25,
        postId: 6,
        userId: 12,
        comment: "Psittacula krameri",
        creationDate: "2016-05-15",
        isConfirmed: true
      },
      {
        commentId: 26,
        postId: 3,
        userId: 14,
        comment: "Ourebia ourebi",
        creationDate: "2016-12-17",
        isConfirmed: true
      },
      {
        commentId: 27,
        postId: 71,
        userId: 19,
        comment: "Axis axis",
        creationDate: "2018-03-19",
        isConfirmed: false
      },
      {
        commentId: 28,
        postId: 61,
        userId: 10,
        comment: "Vombatus ursinus",
        creationDate: "2019-09-15",
        isConfirmed: true
      },
      {
        commentId: 29,
        postId: 4,
        userId: 11,
        comment: "Acanthaster planci",
        creationDate: "2016-02-05",
        isConfirmed: false
      },
      {
        commentId: 30,
        postId: 37,
        userId: 11,
        comment: "Balearica pavonina",
        creationDate: "2018-05-25",
        isConfirmed: true
      },
      {
        commentId: 31,
        postId: 31,
        userId: 2,
        comment: "Branta canadensis",
        creationDate: "2016-10-25",
        isConfirmed: true
      },
      {
        commentId: 32,
        postId: 84,
        userId: 7,
        comment: "Equus hemionus",
        creationDate: "2020-05-06",
        isConfirmed: true
      },
      {
        commentId: 33,
        postId: 17,
        userId: 17,
        comment: "Genetta genetta",
        creationDate: "2016-07-19",
        isConfirmed: true
      },
      {
        commentId: 34,
        postId: 16,
        userId: 13,
        comment: "Myiarchus tuberculifer",
        creationDate: "2022-07-05",
        isConfirmed: false
      },
      {
        commentId: 35,
        postId: 51,
        userId: 10,
        comment: "Eudyptula minor",
        creationDate: "2015-10-13",
        isConfirmed: false
      },
      {
        commentId: 36,
        postId: 26,
        userId: 14,
        comment: "Acrantophis madagascariensis",
        creationDate: "2016-05-10",
        isConfirmed: true
      },
      {
        commentId: 37,
        postId: 49,
        userId: 11,
        comment: "Lutra canadensis",
        creationDate: "2019-06-16",
        isConfirmed: false
      },
      {
        commentId: 38,
        postId: 90,
        userId: 10,
        comment: "Odocoileus hemionus",
        creationDate: "2017-12-14",
        isConfirmed: false
      },
      {
        commentId: 39,
        postId: 89,
        userId: 15,
        comment: "unavailable",
        creationDate: "2021-07-12",
        isConfirmed: false
      },
      {
        commentId: 40,
        postId: 61,
        userId: 4,
        comment: "Boa constrictor mexicana",
        creationDate: "2020-01-07",
        isConfirmed: false
      },
      {
        commentId: 41,
        postId: 59,
        userId: 1,
        comment: "Alcelaphus buselaphus cokii",
        creationDate: "2020-01-24",
        isConfirmed: true
      },
      {
        commentId: 42,
        postId: 36,
        userId: 13,
        comment: "Panthera pardus",
        creationDate: "2015-12-13",
        isConfirmed: true
      },
      {
        commentId: 43,
        postId: 58,
        userId: 16,
        comment: "Gymnorhina tibicen",
        creationDate: "2018-01-12",
        isConfirmed: true
      },
      {
        commentId: 44,
        postId: 98,
        userId: 19,
        comment: "Ammospermophilus nelsoni",
        creationDate: "2019-02-22",
        isConfirmed: false
      },
      {
        commentId: 45,
        postId: 75,
        userId: 11,
        comment: "Halcyon smyrnesis",
        creationDate: "2015-09-10",
        isConfirmed: false
      },
      {
        commentId: 46,
        postId: 27,
        userId: 6,
        comment: "Spermophilus richardsonii",
        creationDate: "2018-02-15",
        isConfirmed: false
      },
      {
        commentId: 47,
        postId: 50,
        userId: 16,
        comment: "Ceratotherium simum",
        creationDate: "2016-07-25",
        isConfirmed: false
      },
      {
        commentId: 48,
        postId: 35,
        userId: 7,
        comment: "Cordylus giganteus",
        creationDate: "2016-01-25",
        isConfirmed: false
      },
      {
        commentId: 49,
        postId: 35,
        userId: 11,
        comment: "Deroptyus accipitrinus",
        creationDate: "2021-08-13",
        isConfirmed: false
      },
      {
        commentId: 50,
        postId: 59,
        userId: 6,
        comment: "Phoca vitulina",
        creationDate: "2019-02-16",
        isConfirmed: false
      }

  ]

  constructor() {}

  getCommentList() : Comment[] {
    return this.comments
  }

  getCommentItem(commentId: number): Comment | undefined {
    return this.comments.find((comment : Comment, index: number) => {
      return comment.commentId === commentId;
    })
  }

  // Yorum silme kontrolü yapıldı.
  deleteCommentItem(id: Number) : void {
    this.comments = this.comments.filter((comment) => comment.commentId !== id);
  }

  // Ynei yeum ekleme kontrolü yapıldı.
  addCommentItem(commentItem: Comment) : void {
    commentItem.commentId = this.comments[this.comments.length - 1].commentId + 1;
    this.comments.push(commentItem);
  }

  updateCommentItem(commentItem: Comment) {
    this.comments = this.comments.map(comment => {
      if(comment.commentId === commentItem.commentId)
        comment = commentItem;
      return comment;
    })
  }
}
