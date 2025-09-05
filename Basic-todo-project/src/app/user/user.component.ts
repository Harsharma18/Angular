

// import { Component,signal,computed } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent {
//   selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

//   get imagePath() {
//     return `./assets/users/${this.selectedUser.avatar}`;
//   }

//   onSelectedUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[randomIndex];

//     console.log("button click");
//   }
// }


//using signals and computed
// import { Component,signal,computed } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent {
//   // selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
//     selectedUser = signal(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);

//    imagePath = computed(()=>'/assets/users/' + this.selectedUser().avatar);
//   // get imagePath() {
//   //   return `./assets/users/${this.selectedUser.avatar}`;
//   // }

//   onSelectedUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     // this.selectedUser = DUMMY_USERS[randomIndex];
//         this.selectedUser.set(DUMMY_USERS[randomIndex]);

//     console.log("button click");
//   }
// }


//using input decorator
// import { Component,signal,computed,Input } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent {
//   @Input({required:true}) avatar!: string;
//   @Input({required:true}) name!:string;
//   @Input() id!:string;
//   get imagePath(){{}
//     return `/assets/users/${this.avatar}`;
//   }
//   onSelectedUser(){
//     if(this.id)
//       console.log(this.id);
//   }

// }


//using signals input
// import { Component,signal,computed,Input,input} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent {
//   avatar=input.required<string>();
//   name=input.required<string>();
//   imagePath = computed(()=>{
//     return `/assets/users/${this.avatar()}`
//   })
//   onSelectedUser(){
// console.log("User selected:", this.name());
//   }

// }

//using output decorator and output function
// import { Component,signal,computed,Input,input,Output,output, EventEmitter} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';
// type User = {id:string,name:string,avatar:string}
// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent {
//   // avatar=input.required<string>();
//   // name=input.required<string>();
//   // id=input.required<string>();
//   // user = input.required<{id:string,name:string,avatar:string}>();
//     user = input.required<User>();

//   // @Output() userSelected = new EventEmitter<string>();
//   //or
//  userSelected = output<string>();
//   imagePath = computed(()=>{
//     return `/assets/users/${this.user().avatar}`
//   })
//   onSelectedUser(){
// // console.log("User selected:", this.name());
//     this.userSelected.emit(this.user().id);
//   }

// }


import { Component,signal,computed,Input,input,Output,output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// type User = {id:string,name:string,avatar:string}

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [CardComponent],
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
export class UserComponent {
//  @Input() user!:{
//   id:string,
//   name:string,
//   avatar:string,
//  }

 @Input() user!:User;
@Input({required:true}) selectedInput!:boolean;
  // @Output() userSelected = new EventEmitter<string>();
  //or
 userSelected = output<string>();
  imagePath = computed(()=>{
    return `/assets/users/${this.user.avatar}`
  })
  onSelectedUser(){
// console.log("User selected:", this.name());
    this.userSelected.emit(this.user.id);
  }

}


