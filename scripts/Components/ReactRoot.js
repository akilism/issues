import { default as React, Component } from "react";
import _ from "lodash";
import { default as requireAll } from "../lib/requireall";
import { default as clamp } from "../lib/clamp";
import { arrArticles } from "../lib/articles";

import hackingTeam from "../../assets/hacking_team.png";
import header from "../../assets/header.png";

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipText: "",
      tipDisplay: "none",
      pos: { x: 0, y: 0 }
    };
  }

  tooltip(text, evt) {
    this.setState({tooltipText: text, pos: {x: (evt.clientX + 5), y: (evt.clientY + 10)}, tipDisplay: "block"});
  }

  hideTooltip() {
    this.setState({tipDisplay: "none"});
  }

  render() {
    const {pos, tooltipText, tipDisplay} = this.state,
          readMarker = (this.props.isRead) ? (<i onMouseMove={this.tooltip.bind(this, "Already Read!")} onMouseOut={this.hideTooltip.bind(this)} className="read-marker fa fa-check">&nbsp;</i>) : "",
          saveMarker = (<i onMouseMove={this.tooltip.bind(this, "Add to Reading List")} onMouseOut={this.hideTooltip.bind(this)} className="save-marker fa fa-plus">&nbsp;</i>);

    return (
      <li className="article-item article-essential">
        <div className="article-item-left">
          <img className="article-item-image" src="http://motherboard-images.vice.com/content-images/article/29058/1450807362692191.jpg" alt="The Worst Hacks of 2015" />
          <div className="article-item-icons">{readMarker} {saveMarker}</div>
        </div>
        <div className="article-item-details">
          <div className="article-item-title">{this.props.title}</div>
          <div className="article-item-byline">By {this.props.author} <br/> {this.props.date}</div>
          <div className="article-item-blurby">This year proved that nothing, and no one, is really safe from hackers.</div>
        </div>
        <div className="article-tool-tip" ref="tooltip" style={{left: pos.x, top: pos.y, display: tipDisplay}}>{tooltipText}</div>
      </li>
    );
  }
}

class MinorArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipText: "",
      tipDisplay: "none",
      pos: { x: 0, y: 0 }
    };
  }

  tooltip(text, evt) {
    this.setState({tooltipText: text, pos: {x: (evt.clientX + 5), y: (evt.clientY + 10)}, tipDisplay: "block"});
  }

  hideTooltip() {
    this.setState({tipDisplay: "none"});
  }

  render() {
    const {pos, tooltipText, tipDisplay} = this.state,
          readMarker = (this.props.isRead) ? (<i onMouseMove={this.tooltip.bind(this, "Already Read!")} onMouseOut={this.hideTooltip.bind(this)} className="read-marker fa fa-check">&nbsp;</i>) : "",
          saveMarker = (<i onMouseMove={this.tooltip.bind(this, "Add to Reading List")} onMouseOut={this.hideTooltip.bind(this)} className="save-marker fa fa-plus">&nbsp;</i>);

    return (
      <li className="article-item article-minor">
        <div className="article-item-left">
          <img className="article-item-image" src="http://motherboard-images.vice.com/content-images/article/29058/1450807362692191.jpg" alt="The Worst Hacks of 2015" />
          <div className="article-item-icons">{readMarker} {saveMarker}</div>
        </div>
        <div className="article-item-details">
          <div className="article-item-title">{this.props.title}</div>
          <div className="article-item-byline">By {this.props.author} <br/> {this.props.date}</div>
        </div>
        <div className="tool-tip" ref="tooltip" style={{left: pos.x, top: pos.y, display: tipDisplay}}>{tooltipText}</div>
      </li>
    );
  }
}

class ReadingListItem extends Component {
  render() {
    const {title, author, date, duration} = this.props;

    return (
      <li className="reading-list-item">
        <div style={{width: "80%"}}>
          <span className="item-title">{title}</span>
          <span className="item-byline">By {author} - {date}</span>
        </div>
        <div style={{width: "20%", paddingLeft: 30}}>
          <span className="item-duration">{duration} minute read</span>
        </div>
      </li>
    );
  }
}

function readingList(items) {
  return (
    <ul className="personal-reading-list">
      <div className="personal-reading-list-title">Your Reading List</div>
      {items.map((i) => {
        return {...i, duration: Math.floor(Math.random() * 20) + 2};
      }).map((i) => {
        return (<ReadingListItem {...i} />);
      })}
    </ul>
  );
}

export default class ReactRoot extends Component {
  render() {
    const requiredReading = arrArticles.filter((article) => {
            return _.any(article.tags, (tag) => { return (tag === "essential"); });
          }).slice(0, 6).map((article) => {
            return (<ArticleItem {...article} />);
          }),
          deepDiveList = arrArticles.slice(0, 9).map((article) => {
            return (<MinorArticleItem {...article} />);
          }),
          readingListElem = readingList(arrArticles.slice(0, 4));

// <div className="issue-image" style={{backgroundImage: `url(${hackingTeam})`}}></div>
// <img className="issue-image" src={hackingTeam} />
    return (
      <div ref="root" className="root">
        <img src={header} className="page-header" />
        <div className="issue">
          <div className="issue-image" style={{ height: 350, width: "100vw", backgroundImage: `url(${hackingTeam})`}}></div>
          <div className="issue-head">
            <span className="site-name">Motherboard Issues:</span>
            <h1 className="issue-title">Hacking Team</h1>
          </div>
          <div className="issue-brief">
            <h2>The low down:</h2>
            <div>Hacking Team is a controversial Italian surveillance company. Their
            spyware software has been sold to governments all around the world,
            including agencies in Ethiopia, Morocco, the United Arab Emirates, as
            well as in the United States. In July of 2015 their internal networks
            were hacked and 500 GB of client files, contracts, financial documents,
            and internal emails, some as recent as 2015, were made publicly available
            for download.</div>
            <div>Their software Galileo, once surreptitiously installed on a target’s cell
            phone or computer, can be used to monitor the target’s communications,
            such as phone calls, text messages, Skype calls, or emails. Operators
            can also turn on the target’s webcam and exfiltrate files from the
            infected device.</div>
            <h3>Why it's important:</h3>
            <div>The released documents from the hack show that Hacking Team has been
            selling it's spyware to a long list of foreign governments with dubious
            human rights records, but it’s also establishing a nice customer base
            among US agencies, including the Drug Enforcement Administration and
            Federal Bureau of Investigation.</div>
          </div>
        </div>
        <div className="reading-list-block">
          <h2>
            Recommended Reading
            <div className="add-all add-personal-list"><i className="read-marker fa fa-check">&nbsp;</i> Add all to Reading List.</div>
          </h2>
          <ul className="reading-list essential-reading-list">{requiredReading}</ul>
        </div>
        <div className="reading-list-block">
          <h2>Deep Dive Into the Issue</h2>
          <ul className="reading-list reading-list-small deepdive-reading-list">{deepDiveList}</ul>
        </div>
        {readingListElem}
      </div>
    );
  }
}
