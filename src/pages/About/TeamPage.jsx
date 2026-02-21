import React from 'react';
import { Link } from 'react-router-dom';
import { teamData } from '../../data/teamData';

const TeamPage = () => {
  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
            >
              {/* 클릭 시 /About/team/1 과 같은 경로로 이동 */}
              <Link
                to={`/About/team/${member.id}`}
                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <div className="team-member" style={{ cursor: 'pointer' }}>
                  <div className="member-img">
                    <img src={member.img} className="img-fluid" alt={member.name} />
                  </div>
                  <div className="member-info text-center">
                    <h4>{member.role}</h4>
                    <span>{member.name}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;