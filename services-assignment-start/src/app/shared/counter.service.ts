export class CounterService {
  countInactiveToActive = 0;
  countActiveToInactive = 0;

  onSetActive() {
    this.countInactiveToActive++;
    this.logChange();
  }

  onSetInactive() {
    this.countActiveToInactive++;
    this.logChange();
  }

  private logChange() {
    console.log("Current stats:");
    console.log("Active to inactive:" + this.countActiveToInactive);
    console.log("Inactive to active:" + this.countInactiveToActive);
  }
}