import { NgTemplateOutlet } from '@angular/common';
import {
    Component,
    Directive,
    input,
    contentChildren,
    inject,
    TemplateRef,
    contentChild,
    ChangeDetectionStrategy,
} from '@angular/core';
import { MaterialModule } from 'modules/material.module';

@Directive({
    selector: '[breadcrumbItem]',
})
export class BreadcrumbItemDirective {
    public templateRef = inject(TemplateRef);
}

@Directive({
    selector: '[breadcrumbSeparator]',
})
export class BreadcrumbSeparatorDirective {
    public templateRef = inject(TemplateRef);
}

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrl: './breadcrumbs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MaterialModule, NgTemplateOutlet],
})
export class BreadcrumbsComponent {
    ariaLabel = input<string>('breadcrumbs', { alias: 'aria-label' });

    items = contentChildren<BreadcrumbItemDirective>(BreadcrumbItemDirective);
    separatorTemplateRef = contentChild<BreadcrumbSeparatorDirective>(
        BreadcrumbSeparatorDirective
    );
}
