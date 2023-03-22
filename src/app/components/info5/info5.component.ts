import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info5',
  templateUrl: './info5.component.html',
  styleUrls: ['./info5.component.css']
})
export class Info5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
  }


}
