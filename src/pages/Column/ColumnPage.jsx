import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../api/supabase.js";

const categoryStyleMap = {
  의료소송: {
    backgroundColor: "#e7f1ff",
    color: "#0d6efd",
  },
  형사: {
    backgroundColor: "#f8d7da",
    color: "#b02a37",
  },
  민사: {
    backgroundColor: "#fff3cd",
    color: "#664d03",
  },
  학교폭력: {
    backgroundColor: "#d1e7dd",
    color: "#146c43",
  },
  default: {
    backgroundColor: "#e9ecef00",
    color: "#495057",
  },
};

const ColumnList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("columns")
        .select("*, categories(category_name)")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setPosts(data || []);
    };

    fetch();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("ko-KR");
  };

  return (
    <section className="services section">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex flex-column gap-3">
              {posts.length ? posts.map((post) => {
                const categoryName = post.categories?.category_name || "기타";
                const style = categoryStyleMap[categoryName] || categoryStyleMap.default;

                return (
                  <Link
                    key={post.id}
                    to={`/Column`}
                    className="text-decoration-none"
                  >
                    <div
                      className="column-card bg-white rounded-4 shadow-sm px-4 py-3 d-flex justify-content-between align-items-center gap-3"
                      style={{
                        transition: "all 0.2s ease",
                        border: "1px solid rgba(0,0,0,0.04)",
                      }}
                    >
                      <div className="d-flex align-items-center gap-3 flex-grow-1 min-w-0">
                        <span
                          className="fw-semibold px-3 py-2"
                          style={{
                            borderRadius: "999px",
                            fontSize: "0.8rem",
                            flexShrink: 0,
                            display: "inline-block",
                            ...style,
                          }}
                        >
                          {categoryName}
                        </span>

                        <div
                          className="fw-bold text-dark text-truncate"
                          style={{
                            fontSize: "1.02rem",
                          }}
                        >
                          {post.title}
                        </div>
                      </div>

                      <div
                        className="text-muted small flex-shrink-0"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {formatDate(post.created_at)}
                      </div>
                    </div>
                  </Link>
                );
              }) : <h4>준비중입니다.</h4>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnList;