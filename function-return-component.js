// critically: returned anon class MUST extends Component
// so it will recieve ALL props to be passed to <component><file>

// f - embracer, need to pass component name
// anon class - controller, handles logic
// componentName - calculated data reciever

const func = (ComponentName) => {
  return class extends Component {
    // lifecycles handles all reqs
    // and gets data, put data to state
    render() {
      const { data } = this.state
      return <ComponentName data={data} />
    }
  }
}
export default func