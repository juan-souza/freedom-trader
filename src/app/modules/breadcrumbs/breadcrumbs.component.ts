import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AppBreadcrumbsService } from './services/app-breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() fixed: boolean;

  public breadcrumbs;
  private readonly fixedClass = 'breadcrumb-fixed';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    public service: AppBreadcrumbsService,
  ) { }

  public ngOnInit(): void {
    this.isFixed(this.fixed);
    this.breadcrumbs = this.service.breadcrumbs;
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }

}
