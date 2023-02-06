export interface IElasticLoadingProps {}
import styles from "./styles.module.scss";

export default function ElasticLoading(props: IElasticLoadingProps) {
    return (
        <div
            style={{
                height: "100%",
                margin: "4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className={styles.dotElastic}></div>
        </div>
    );
}
