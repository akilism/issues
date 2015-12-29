import { default as React, Component } from "react";
import _ from "lodash";
import { default as requireAll } from "../lib/requireall";
import { default as clamp } from "../lib/clamp";

export default class ReactRoot extends Component {

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div ref="root" className="root">

      </div>
    );
  }
}
