import React from 'react';

var Passage = React.createClass({
  render(){
    var isActive = this.props.isActive;
    return (
      <div className="passage">
        <h3 className="passage__title mdl-typography--headline">{this.props.data.title}</h3>
        {/*
          TODO: move the passage text to data.json and figure out how to insert
          the hightlights as React components
        */}
        <p className="passage__copy">
          In recent years, public libraries in the United States have
          experienced
          <span id="passage__highlight-1" className={isActive && this.props.activeQuestion === 0 ? 'passage__highlight' : null}>
            reducing
          </span>
          in their operating funds due to cuts imposed at
          the federal, state, and local government levels.
          <span id="passage__highlight-2" className={isActive && this.props.activeQuestion === 1 ? 'passage__highlight' : null}>
            However
          </span>
          , library staffing has been cut by almost four percent since 2008,
          and the demand for librarians continues to decrease, even though
          half of public libraries report that they have an insufficient
          number of staff to meet their patrons’ needs.
        </p>
        <p className="passage__copy">Employment in all
          job sectors in the United States is projected to grow by fourteen
          percent over the next decade, yet the expected growth rate for
          librarians is predicted to be only seven percent, or half of the
          overall rate. This trend, combined with the increasing accessibility
          of information via the Internet,
          <span id="passage__highlight-3" className={isActive && this.props.activeQuestion === 2 ? 'passage__highlight' : null}>
            has
          </span>
          led some to claim that librarianship is in decline as a profession.
          As public libraries adapt to rapid technological advances in
          information distribution, librarians’ roles are actually expanding.
        </p>
        <p className="passage__copy">
          The share of library materials that is in nonprint
          formats
          <span id="passage__highlight-4" className={isActive && this.props.activeQuestion === 3 ? 'passage__highlight' : null}>
            –
          </span>
          is increasing steadily; in 2010, at least 18.5 million e-books
          were available
          <span id="passage__highlight-5" className={isActive && this.props.activeQuestion === 4 ? 'passage__highlight' : null}>
            for them to circulate
          </span>
          . As a result, librarians must now be proficient curators of
          electronic information, compiling,
          <span id="passage__highlight-6" className={isActive && this.props.activeQuestion === 5 ? 'passage__highlight' : null}>
            catalog
          </span>
          , and updating these collections. But perhaps even more importantly,
          librarians function as first responders for their communities’
          computer needs. Since one of the fastest growing library services
          is public access computer use, there is great demand for computer
          instruction.
          <span id="passage__highlight-7" className={isActive && this.props.activeQuestion === 6 ? 'passage__highlight' : null}>
            In fact, librarians’ training now includes courses on research and
            Internet search methods. Many of whom teach classNamees in Internet
            navigation, database and software use, and digital information literacy.
          </span>
          While these classes are particularly helpful to young students
          developing basic research skills,
          <span id="passage__highlight-8" className={isActive && this.props.activeQuestion === 7 ? 'passage__highlight' : null}>
            but
          </span>
          adult patrons can also benefit from librarian assistance in that
          they can acquire job-relevant computer skills.
          <span id="passage__highlight-9" className={isActive && this.props.activeQuestion === 8 ? 'passage__highlight' : null}>
            Free to all who utilize their services
          </span>
          , public libraries and librarians are especially valuable, because
          they offer free resources that may be difficult to find elsewhere,
          such as help with online job searches as well as résumé and job
          material development. An overwhelming number of public libraries
          also report that they provide help with electronic government
          resources related to income taxes,
          <span id="passage__highlight-10" className={isActive && this.props.activeQuestion === 9 ? 'passage__highlight' : null}>
            law troubles
          </span>
          , and retirement programs.
        </p>
        <p className="passage__copy">
          In sum, the Internet does not replace
          the need for librarians, and librarians are hardly obsolete.
          <span id="passage__highlight-11" className={isActive && this.props.activeQuestion === 10 ? 'passage__highlight' : null}>
            Like books, librarians have been around for a long time, but the
            Internet is extremely useful for many types of research.
          </span>
        </p>
      </div>

    );
  }
});

export default Passage;
