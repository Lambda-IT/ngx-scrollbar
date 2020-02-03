import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-example-lambda',
  templateUrl: './example-lambda.component.html',
  styleUrls: ['./example-lambda.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleLambdaComponent {
  public rows = Array(100).fill(null).map((_, i) => i);
  public columns = Array(15).fill(null).map((_, i) => i);
}
