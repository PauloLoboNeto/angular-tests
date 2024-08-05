import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ComponentA } from "../componentA/componentA.component";
import { ComponentC } from "../componentC/componentC.component";

@Component({
    standalone: true,
    templateUrl: './template.html',
    imports: [ComponentA, ComponentC, CommonModule, RouterModule],
    selector: 'componentB',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentB {

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
       console.log('bcomp',this.activatedRoute);
      }

    navigateAbsolute() {
        //tenhoa que estar na rota B
        //vai levar pro A
        this.router.navigate(['componentA']);
      }

      navigateAbsoluteUsandoNavigateBy() {
        //tenhoa que estar na rota B
        //vai levar pro A raíz
        this.router.navigateByUrl('componentA');
      }
    
      navigateRelative() {
        //tenhoa que estar na rota B
        //vai levar pro C
        this.router.navigate(['componentA'], {relativeTo: this.activatedRoute});
      }

      navigateAbsolutoMesmoQueDeclaradoORelativeTo() {
        //tenhoa que estar na rota B
        //vai levar pro C
        this.router.navigate(['/componentA'], {relativeTo: this.activatedRoute});
      }

      navigateRelativeWithParamsLevaProA() {
        //tenhoa que estar na rota B
        //vai levar pro A
        this.router.navigate(['componentA/1/teste'], {relativeTo: this.activatedRoute});
      }
      navigateRelativeWithParamsLevaProC() {
        //tenhoa que estar na rota B
        //vai levar pro C
        this.router.navigate(['componentA/1/teste/aqui'], {relativeTo: this.activatedRoute});
      }

}