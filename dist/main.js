(()=>{"use strict";function e(){const e=document.querySelector("main#main");document.querySelector(".taskContainer"),e.classList.toggle("menuIsNotActive")}function t(e){const t=document.querySelector(".dropDown"),n=e.target.children[0];"none"==t.style.display?(t.style.display="block",n.classList.toggle("fa-caret-down"),n.classList.toggle("fa-caret-up")):(t.style.display="none",n.classList.toggle("fa-caret-down"),n.classList.toggle("fa-caret-up"))}window.addEventListener("DOMContentLoaded",(n=>{(()=>{const n=document.querySelector(".menuIcon"),c=document.querySelector(".projectsTitle");n.addEventListener("click",e),c.addEventListener("click",t)})()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sU0FBU0EsSUFDWixNQUFNQyxFQUFPQyxTQUFTQyxjQUFjLGFBQ2RELFNBQVNDLGNBQWMsa0JBQzdDRixFQUFLRyxVQUFVQyxPQUFPLGtCQUMxQixDQUVPLFNBQVNDLEVBQWdCQyxHQUM1QixNQUFNQyxFQUFXTixTQUFTQyxjQUFjLGFBQ2xDTSxFQUFjRixFQUFNRyxPQUFPQyxTQUFTLEdBQ1osUUFBMUJILEVBQVNJLE1BQU1DLFNBQ2ZMLEVBQVNJLE1BQU1DLFFBQVUsUUFDekJKLEVBQVlMLFVBQVVDLE9BQU8saUJBQzdCSSxFQUFZTCxVQUFVQyxPQUFPLGlCQUU3QkcsRUFBU0ksTUFBTUMsUUFBVSxPQUN6QkosRUFBWUwsVUFBVUMsT0FBTyxpQkFDN0JJLEVBQVlMLFVBQVVDLE9BQU8sZUFFckMsQ0NoQkFTLE9BQU9DLGlCQUFpQixvQkFBb0JDLElDQWYsTUFFekIsTUFBTUMsRUFBV2YsU0FBU0MsY0FBYyxhQUNsQ2UsRUFBbUJoQixTQUFTQyxjQUFjLGtCQUVoRGMsRUFBU0YsaUJBQWlCLFFBQVUsR0FDcENHLEVBQWlCSCxpQkFBaUIsUUFBUyxFQUFrQixFREw3REksRUFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9VSW1hbml1cHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluI21haW5cIilcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tDb250YWluZXJcIilcclxuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnVJc05vdEFjdGl2ZVwiKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKGV2ZW50KSB7XHJcbiAgICBjb25zdCBkcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcERvd25cIilcclxuICAgIGNvbnN0IGNhcmV0U3ltYm9sID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdXHJcbiAgICBpZiAoZHJvcERvd24uc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGRyb3BEb3duLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICBjYXJldFN5bWJvbC5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2FyZXQtZG93blwiKVxyXG4gICAgICAgIGNhcmV0U3ltYm9sLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jYXJldC11cFwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkcm9wRG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICBjYXJldFN5bWJvbC5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2FyZXQtZG93blwiKVxyXG4gICAgICAgIGNhcmV0U3ltYm9sLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jYXJldC11cFwiKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVUltYW5pcHVsYXRvciB9IGZyb20gXCIuL21vZHVsZXMvZXZlbnRzXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZSA9PntcclxuICAgIFVJbWFuaXB1bGF0b3IoKVxyXG59KVxyXG4iLCJpbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSW1hbml1cHVsYXRpb25cIlxyXG5cclxuZXhwb3J0IGNvbnN0IFVJbWFuaXB1bGF0b3IgPSAoKT0+e1xyXG4gICAgLy8gZWxlbWVudHNcclxuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51SWNvblwiKVxyXG4gICAgY29uc3QgcHJvamVjdHNEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNUaXRsZVwiKVxyXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsIFVJLmRpc3BsYXlNZW51KVxyXG4gICAgcHJvamVjdHNEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZGlzcGxheVByb2plY3RzKVxyXG5cclxufSJdLCJuYW1lcyI6WyJkaXNwbGF5TWVudSIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJkaXNwbGF5UHJvamVjdHMiLCJldmVudCIsImRyb3BEb3duIiwiY2FyZXRTeW1ib2wiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibWVudUljb24iLCJwcm9qZWN0c0Ryb3Bkb3duIiwiVUltYW5pcHVsYXRvciJdLCJzb3VyY2VSb290IjoiIn0=