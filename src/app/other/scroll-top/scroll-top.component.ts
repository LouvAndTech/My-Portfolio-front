import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  template: `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <a id="up_button" class="{{class}}" (click)="scrollToTop()"></a>
  `,
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
  windowScrolled = false;
  class = "";
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
          this.class = "show";
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
          this.class = "";
      }
  }

  scrollToTop() {
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
    })();
}

  /*function button() {
    btn = document.getElementById('up_button');
    if (window.scrollY > 300) {
      btn.classList.add('show');
    }
    btn.addEventListener("click", function(){
      window.window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    })
  };
  
  
  window.addEventListener('scroll', (event) => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });*/
  

}
