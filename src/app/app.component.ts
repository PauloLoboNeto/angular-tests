import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';
// import { Route } from '@angular/router';
import { getLCP, getFID, getTTFB, getCLS, getFCP } from 'web-vitals';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  // count = signal('');
  // setSignal(element: Event){
  //   const input = element.target as HTMLInputElement;
  //   this.count.set(input.value)
  // }

  // updateSignal(element: Event){
  //   const input = element.target as HTMLInputElement;
  //   this.count.update(value => value + input.value)
  // }

  private navigationEnd$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  );

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.navigationEnd$.subscribe((_) => {
      // console.log(res);
      // console.log('appcomp',this.activatedRoute);
      // console.log('appcomp',this.activatedRoute.url);
    })
    
    // getCLS(console.log, true);
    // getFID(console.log);
    // getLCP(console.log, true);
    // getFCP(console.log, true);
    // getTTFB(console.log);
    const perfObserver = (log: any) => new PerformanceObserver((res) => {
      console.log(log, res.getEntries());
      console.log(log + ' DURATION: ', res.getEntries()[0].name + ' ' +res.getEntries()[0].duration);
      console.log(log + ' DOMCONTENTLOAD: ', res.getEntries()[0].name + ' ' + res.getEntries()[0].toJSON().domContentLoadedEventEnd);
      console.log(log + ' DNS: ', res.getEntries()[0].toJSON().domainLookupEnd - res.getEntries()[0].toJSON().domainLookupStart);
      console.log(log + ' TCP: ', res.getEntries()[0].toJSON().connectEnd - res.getEntries()[0].toJSON().connectStart);
      console.log(log + ' TLS: ', res.getEntries()[0].toJSON().requestStart - res.getEntries()[0].toJSON().secureConnectionStart);
    });

    const perfResourceObserver = (log: any) => new PerformanceObserver((res) => {
      // console.log(log, res.getEntries());
      res.getEntries().forEach(res => {
        console.log(log + ' duration: ',res.name + ' ' + res.duration);
      })
    });

    // const perfLongTaskObserver = (log: any) => new PerformanceObserver((res) => {
    //   console.log(log, res.getEntries());
    // });
    
    perfObserver('navigation').observe({
      type: 'navigation',
      buffered: true,
    });

    perfResourceObserver('resource').observe({
      type: 'resource',
      buffered: true,
    });

    // perfLongTaskObserver('longtask').observe({
    //   type: 'longtask',
    //   buffered: true,
    // });

    // measure
    // element
  }

  componentCComFragment() {
    this.router.navigate([{ outlets: { secondary: ['componentC'] } }], { fragment: 'loading' });
  }

  componentC() {
    this.router.navigate([{ outlets: { secondary: ['componentC'] } }]);
  }

  navigate() {
    this.router.navigate(['/componentD']);
  }
}
