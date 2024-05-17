import React from 'react';

function AdditionalWidgets({ matchSchedule, teamNews }) {
  return (
    <div className="additional-widgets">
      {/* Match Schedule */}
      <div className="widget">
        <h3>Match Schedule</h3>
        <ul>
          {matchSchedule.map((match) => (
            <li key={match.id}>
              <span>{match.date}</span> - {match.opponent}
            </li>
          ))}
        </ul>
      </div>

      {/* Team News */}
      <div className="widget">
        <h3>Team News</h3>
        <ul>
          {teamNews.map((news) => (
            <li key={news.id}>
              <span>{news.date}</span> - {news.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdditionalWidgets;
