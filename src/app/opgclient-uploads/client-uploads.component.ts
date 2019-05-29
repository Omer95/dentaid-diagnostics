import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-client-uploads',
  templateUrl: './client-uploads.component.html',
  styleUrls: ['./client-uploads.component.scss']
})
export class ClientUploadsComponent implements OnInit {
  imageUrlList = [];
  randList = [];
  showImages = false;
  // tslint:disable-next-line:max-line-length
  imgsrc = 'https://firebasestorage.googleapis.com/v0/b/dentaid-diagnostics.appspot.com/o/opgclient%2F324.jpeg?alt=media&token=b1f6fec2-ac75-4312-8cd3-6be30e0a18d3';
  constructor(private db: AngularFireDatabase,
              private storage: AngularFireStorage) { }

  ngOnInit() {
    this.db.list('/opgclient').valueChanges().subscribe(files => {
      files.forEach(file => {
        this.randList.push(1);
        this.storage.ref(`/opgclient/${file['filename']}`).getDownloadURL().subscribe(url => {
          this.imageUrlList.push({filename: file['filename'], imageUrl: url});
        });
      });
      console.log(this.imageUrlList);
      this.showImages = true;
    });
  }

}
