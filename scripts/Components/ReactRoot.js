import { default as React, Component } from "react";
import _ from "lodash";
import { default as requireAll } from "../lib/requireall";
import { default as clamp } from "../lib/clamp";
import { arrArticles } from "../lib/articles";

import hackingTeam from "../../assets/hacking_team.png";

export default class ReactRoot extends Component {

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    const requiredReading = arrArticles.filter((article) => {
            return _.any(article.tags, (tag) => { return (tag ===  "essential"); });
          }).map((article) => {
            return (<li className="article-item article-essential">{article.title}</li>);
          }),
          deepDiveList = [];

    return (
      <div ref="root" className="root">
        <div className="header-image" style={{backgroundImage: `url(${hackingTeam})`}}> </div>
        <h1>Hacking Team</h1>
        <div>
          <h2>Get caught up:</h2>
          <ul className="reading-list essential-reading-list">{requiredReading}</ul>
        </div>
        <div>
          <h2>Deep Dive:</h2>
          <ul className="reading-list deepdive-reading-list">{deepDiveList}</ul>
        </div>
      </div>
    );
  }
}
