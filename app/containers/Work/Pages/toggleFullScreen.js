export default function fullScreenToggle(target) {
  this.setState({ [target]: !this.state[target] });
}
