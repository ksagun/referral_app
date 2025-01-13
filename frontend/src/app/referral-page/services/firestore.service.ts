import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  DocumentData,
  query,
  where,
  getDoc,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  createReferral(
    invite_code: string,
    name: string,
    referrer_email: string,
    referral_email: string,
    invite_date: Date
  ): Observable<any> {
    console.log(referrer_email);
    return new Observable((observer) => {
      addDoc(collection(this.firestore, 'referral_app'), {
        referrer_type: 'referral',
        invite_code: invite_code,
        name: name,
        referrer_email: referrer_email,
        referral_email: referral_email,
        invite_date: invite_date,
      })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
          observer.next({
            success: true,
            message: 'Document written with ID: ' + docRef.id,
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
    // return new Observable((observer) => {
    //   setDoc(doc(this.firestore, 'referral_app'), {
    //     referrer_type: 'referral',
    //     referrer_email: referrer_email,
    //     refferral_email: referral_email,
    //     invite_code: invite_code,
    //     invite_date: invite_date,
    //   })
    //     .then((docRef) => {
    //       console.log('Document written with ID: ', docRef);
    //       observer.next({
    //         success: true,
    //         message: 'Document written with ID: ' + docRef,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       observer.next({
    //         success: false,
    //         message: err,
    //       });
    //     });
    // });
  }

  getReferralsByEmail(email: string): Observable<any> {
    return new Observable((observer) => {
      getDocs(
        collection(this.firestore, `referral_app`, email, 'referrals')
      ).then((docs) => {
        let referrals: DocumentData[] = [];
        docs.forEach((item) => {
          referrals.push(item.data());
        });
        return observer.next(referrals);
      });
    });
  }

  getReferralsByInviteCode(code: string): Observable<any> {
    console.log(code);
    return new Observable((observer) => {
      const ref = collection(this.firestore, `referral_app`);
      const q = query(
        ref,
        where('invite_code', '==', code),
        where('referrer_type', '==', 'referrer')
      );
      const querySnapshot = getDocs(q);
      let item: DocumentData[] = [];

      querySnapshot.then((data) => {
        data.forEach((field) => {
          console.log(field.data());
          item.push(field.data());
        });

        observer.next(item[0]);
      });
    });
  }

  getLoggedInUserReferralRecord(email: string, code: string): Observable<any> {
    return new Observable((observer) => {
      const ref = collection(this.firestore, `referral_app`);
      const q = query(
        ref,
        where('invite_code', '==', code),
        where('referral_email', '==', email)
      );
      const querySnapshot = getDocs(q);
      let item: DocumentData[] = [];

      querySnapshot
        .then((data) => {
          data.forEach((field) => {
            console.log(field.data());
            item.push(field.data());
          });

          observer.next(item.length === 0 ? { success: false } : item[0]);
        })
        .catch((err) => {
          console.log(err);
          observer.next({ succes: false, message: 'No data' });
        });
    });
  }
}
