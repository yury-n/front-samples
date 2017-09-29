import React from "react";
import { withRouter } from "react-router";
import { HLayout, HLayoutItem, VLayout, VLayoutItem } from "react-flexbox-layout";
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    const props = this.props;    
    return (
      <HLayout width="100%" gutter={7}>
        <HLayoutItem flexGrow={1}>
          <div>
            <h3 style={headerStyle}>Artists</h3>
            {this.renderArtistList()}
          </div>
        </HLayoutItem>
        <HLayoutItem flexGrow={1}>
          {this.renderSpotLight()}
        </HLayoutItem>
      </HLayout>
    );
  }

  renderArtistList() {
    return this.props.artists.map(artist => (
      <NavLink
        key={artist._id}
        to={`/artists/${artist._id}`}
        style={artistLinkStyle}
        activeStyle={selectedArtistLinkStyle}
      >
        <HLayout key={artist._id} height="100%" alignItems="middle" gutter={7}>
          <div
            style={{
              ...artistAvatarStyle,
              backgroundImage: `url(imgs/artists/${artist._id}.png)`,
            }}
          />
          <HLayoutItem flexGrow style={artistNameStyle}>
            <span>{`${artist.firstName} ${artist.lastName}`}</span>
          </HLayoutItem>
        </HLayout>
      </NavLink>      
    ));
  }

  renderSpotLight() {
    const props = this.props;
    const selectedArtistId = props.match.params && props.match.params.artistId;
    if (!selectedArtistId) {
      return null;
    }
    const artistInSpotlight = props.artists.find(
      artist => artist._id == selectedArtistId
    );
    const label = `${artistInSpotlight.firstName} ${artistInSpotlight.lastName}`;
    const imgUrl = `imgs/artists/${artistInSpotlight._id}.png`;
    return (
      <div style={spotLightContainerStyle}>
        <div
          style={{
            ...spotLightImgStyle,
            backgroundImage: `url(${imgUrl})`,
          }}
        />
        <div style={spotLightLabelStyle}>{label}</div>
      </div>
    )
  }
}

export default withRouter(Dashboard);

// styles

const BORDER = '1px solid #e3e9e8';

const headerStyle = {
  fontWeight: "normal",
  fontSize: "17px",
  marginLeft: "1.1rem",
  color: "#8d8d8d",
};

const artistLinkStyle = {
  borderBottom: BORDER,
  padding: "0.3rem 0.5rem",
  height: "4rem",
  fontSize: "1.1rem",
  display: "block",
  backgroundColor: "white",
  textDecoration: "none",
  color: "black",
};

const selectedArtistLinkStyle = {
  backgroundColor: "#f6fafb",
  backgroundImage: "linear-gradient(108deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
  cursor: "default",
};

const artistNameStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const artistAvatarStyle = {
  height: "3rem",
  width: "3rem",
  margin: "0 0.6rem",
  borderRadius: "50%",
  backgroundSize: "cover",
};

const spotLightImgStyle = {
  height: "9rem",
  width: "9rem",
  margin: "auto",
  borderRadius: "50%",
  backgroundSize: "cover"
};

const spotLightLabelStyle = {
  fontWeight: "bold",
  textAlign: "center",
  margin: "20px 0",
  fontSize: "25px",
};

const spotLightContainerStyle = {
  paddingTop: "105px",
  boxSizing: "border-box",
  height: "400px",
  width: "460px",
  marginLeft: "auto",
  backgroundImage: "linear-gradient(288deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
};
