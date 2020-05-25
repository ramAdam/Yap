import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

export const popUp = trigger("pop", [
  state("hide", style({ transform: "translateY(100%)" })),
  state("show", style({ transform: "translateY(0)" })),
  transition("hide<=>show", [animate("0.1s")]),
]);
