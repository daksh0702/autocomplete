import { Component, ViewEncapsulation } from '@angular/core';
import { ApiCallsService } from './api-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'autocomplete';
  inputVal:any = ''
  results:any[]=[]
  constructor(
    private api:ApiCallsService
  ){
  }

  getNames(){
    console.log('val',this.inputVal)

    this.api.getNames(this.inputVal).subscribe((res:any) => {
      this.results = res.items
      console.log('res',res)
    },
    err => {
      console.log("error",err)
    })
  }

  updateInputField(val:any){
    this.inputVal = val
  }

  debounce(callback:any,time:any){
    let id:any;
    return function(){
      if(id){
        clearTimeout(id)
      }
      id=setTimeout(()=>{
        callback()
      },time)
    }
  }

  myDebounce = this.debounce(()=>this.getNames(),1000)

}
