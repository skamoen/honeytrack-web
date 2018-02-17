import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSession, fetchSessions } from '../actions/index';
import { Link } from 'react-router';
import View from './view';

class ConfigurationOverview extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
  }

  renderTable() {}

  render() {
    return ( 
	<View title = "Setup" subtitle = "Instructions" >
      <p>Honeytrack Agent</p>

		<p>The Honeytrack agent is a small lightweight honeypot listener that forwards traffic to a central honeytrack server.</p>

		<p>Installation
		The Honeytrack Agent is still experimental software. It's stable for general usage, but you may need to restart or update. 
		On startup, it connects to the central server to receive its configuration.
		At this time, the agents are instructed to listen to port 23 (Telnet). You should forward port 23 to your device in your router.</p>

		<p>There are a few installation options.
		The easiest option is the provided zip file. This contains an executable, configuration file and start script.
		You should run this in a <code>screen</code> session, or run the start script as <code>nohup sudo ./startAgent.sh &amp;</code></p>

		<p>Alternatively, you can build the agent from source. For this, you need Go(lang) installed, at least version 1.8.
		Once Go is installed, get the package with <code>go get github.com/honeytrap/honeytrap-agent</code>, <code>cd $GOPATH/src/github.com/honeytrap/honeytrap-agent</code>
		finally build with <code>go build -o bin/honeytrap-agent</code>. Create a configuration file with the following content:</p>

		<p>server="honeytrack.cyber-threat-intelligence.com:12000"
		remote-key="a842e2a34911b311e40892da583185fb3ba0748f1931bfcc53f6e5e16898ff06"</p>

		<p>You can then run the agent with <code>sudo ./honeytrap-agent -f config.toml</code>. Note that the agent runs in the foreground.
		You need to run it in a <code>screen</code> session or use something like <code>nohup</code> to run it in the background</p> 
	</View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ConfigurationOverview);