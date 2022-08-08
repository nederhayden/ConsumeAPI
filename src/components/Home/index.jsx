import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import styles from "./styles.module.scss";
import { formatDistance, subDays } from "date-fns";
import { pt } from "date-fns/locale";

export function HomeComponent() {
  const { data } = useApi("/repos");
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredRepos(data.filter((repo) => repo.name.includes(search)));
  }, [search]);

  return (
    <div className={styles.container}>
      <input
        name="search"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {data.length > 0 ? (
        <ul className={styles.list}>
          {filteredRepos.map((repo) => {
            return (
              <li key={repo.id} className={styles.item}>
                <strong>{repo.name.toUpperCase()}</strong>
                <li className={styles.li}>
                  Criado há:{" "}
                  {formatDistance(
                    subDays(new Date(repo.created_at), 1),
                    new Date(),
                    {
                      locale: pt,
                    }
                  )}
                </li>
                <li className={styles.li}>
                  Atualizado há:{" "}
                  {formatDistance(
                    subDays(new Date(repo.created_at), 10),
                    new Date(),
                    {
                      locale: pt,
                    }
                  )}
                </li>
                <li className={styles.li}>
                  Ramo padrão:{" "}
                  {repo.default_branch[0].toUpperCase() +
                    repo.default_branch.substring(1)}
                </li>
                <li className={styles.li}>
                  <a href={repo.html_url} target="blank">
                    Link
                  </a>
                </li>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
