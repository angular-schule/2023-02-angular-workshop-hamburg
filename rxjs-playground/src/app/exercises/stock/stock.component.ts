import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EMPTY, Observable, Subject, filter, map, scan, withLatestFrom } from 'rxjs';

import { StockService } from './stock.service';

interface StockPurchase {
  date: number;   // Zeitstempel
  amount: number; // gekaufte Menge
  rate: number;   // Kurs zum Zeitpunkt des Kaufs
  total: number;  // Gesamtpreis
}

@Component({
  selector: 'rxw-stock',
  templateUrl: './stock.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockComponent {

  form = new FormGroup({ amount: new FormControl(0, { nonNullable: true }) });
  purchasesList$: Observable<StockPurchase[]>;


  goldRate$ = this.stock.goldRate$;      // Wechselkurs
  buyAction$ = new Subject<number>();    // Kaufaktionen mit Kaufmenge
  purchases$: Observable<StockPurchase> = EMPTY; // Ergebnisse: Datenstrom von Käufen mit allen Metadaten


  constructor(private stock: StockService) {
    /**
     * Wir bauen eine Anwendung zum Kauf von Gold!
     * Das heiße Observable `this.goldRate$` liefert immer den aktuellen Wechselkurs.
     * Mit dem Formular kannst Du Kaufaktionen auslösen.
     * `this.buyActions$` emittiert bei jedem Kauf die gewünschte Kaufmenge als Zahl.
     *
     * Baue einen Datenstrom, der vollständige Käufe mit allen Metadaten ausgibt.
     * Die Metadaten werden durch das Interface `StockPurchase` definiert.
     * Die Ergebnisse sollen in `this.purchases$` ausgegeben werden.
     *
     * Käufe mit einer Menge von 0 sollen ignoriert werden.
     */

    /******************************/

    
    /******************************/


    this.purchasesList$ = this.purchases$.pipe(scan((acc, item) => [item, ...acc.slice(0, 9)], [] as StockPurchase[]));
  }

  buy() {
    this.buyAction$.next(this.getAmount());
  }

  getAmount() {
    return this.form.get('amount')?.value ?? 0;
  }

}
