import { teamData } from '../../data/teamData';
import MemberDetail from "./MemberDetail.jsx";
import {useState} from "react"; // 데이터 가져오기

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="team" className="team section">
      {selectedMember ? (
        <MemberDetail
          member={selectedMember}
          onBack={() => setSelectedMember(null)}
        />
      ) : (
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                onClick={() => setSelectedMember(member)}
                style={{ cursor: 'pointer' }}
              >
                <div className="team-member">
                  <div className="member-img">
                    <img src={member.img} className="img-fluid" alt={member.name} />
                  </div>
                  <div className="member-info text-center">
                    <h4>{member.role}</h4>
                    <span>{member.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamPage;