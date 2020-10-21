import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify, Link} from '../utils';

export default class ContentBlockTwo extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block text-block outer two-column-content">
              <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
              <div className="inner">
                <div className="block-inside">
                  <div className="block-content left">
                    <div className="block-text">
                      {markdownify(_.get(this.props, 'section.content'))}
                    </div>
                  </div>
                  <div className="block-content right">
                    <div className="block-text">
                      {markdownify(_.get(this.props, 'section.content_two'))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
