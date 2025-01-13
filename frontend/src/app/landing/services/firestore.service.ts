import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  setDoc,
  doc,
  DocumentData,
  where,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  createReferral(
    referrer_email: string,
    referral_email: string,
    invite_code: string,
    invite_date: Date
  ): Observable<any> {
    return new Observable((observer) => {
      setDoc(
        doc(
          this.firestore,
          'referral_app',
          referrer_email,
          'referrals',
          referral_email
        ),
        {
          referrer_email: referrer_email,
          refferral_email: referral_email,
          invite_code: invite_code,
          invite_date: invite_date,
        }
      )
        .then((docRef) => {
          console.log('Document written with ID: ', docRef);
          observer.next({
            success: true,
            message: 'Document written with ID: ' + docRef,
          });
        })
        .catch((err) => {
          console.log(err);
          observer.next({
            success: false,
            message: err,
          });
        });
    });
  }

  getReferrals(email: string): Observable<any> {
    return new Observable((observer) => {
      const ref = collection(this.firestore, `referral_app`);
      const q = query(ref, where('referrer_email', '==', email));
      const querySnapshot = getDocs(q);
      let item: DocumentData[] = [];

      querySnapshot
        .then((data) => {
          data.forEach((field) => {
            console.log(field.data());
            item.push(field.data());
          });

          if (item.length === 0) {
            const q2 = query(ref, where('referral_email', '==', email));
            const querySnapshotForReferral = getDocs(q2);

            querySnapshotForReferral.then((data2) => {
              data2.forEach((field) => {
                console.log(field.data());
                item.push(field.data());
              });
            });
          }

          observer.next(item.length === 0 ? [] : item);
        })
        .catch((err) => {
          console.log(err);
          observer.next({ succes: false, message: 'No data' });
        });
    });
  }
}
