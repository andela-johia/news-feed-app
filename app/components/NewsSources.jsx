import React from 'react';

/**
 *
 * @class NewsSources
 * @extends {React.Component}
 */
class NewsSources extends React.Component {
  render() {
    return (
      <div>
        {this.props.sourcesValue.map((item) => {
          const sortsArray = item.sortBysAvailable;
          const links = sortsArray.map(link => (
            <a key={link} href={`#/sources/${item.id}/${link}`}>
              {link}{' News'}</a>
          ));
          return (<div className="col s12 m6" key={item.name}>
            <div className="card small grey lighten-4" id="heightStyle">
              <div className="card-content">
                <span className="card-title">{item.name}</span>
                <p>{item.description}</p>
              </div>
              <div className="card-action">
                {links}
              </div>
            </div>
          </div >);
        })}
      </div>
    );
  }
}

export default NewsSources;

NewsSources.propTypes = {
  sourcesValue: React.PropTypes.array,
};
