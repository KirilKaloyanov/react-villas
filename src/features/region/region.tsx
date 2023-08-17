import s from "./region.module.css";

export default function Region() {
  return (
    <>
      <h3>Орцево в цифри</h3>
      <div className={s.tiles}>
        <div className={s.tile}>
          <strong>1555</strong> м. н. в.
        </div>
        <div className={s.tile}>
          <strong>153</strong> жители
        </div>
        <div className={s.tile}>
          <strong>187</strong> км от София
        </div>
        <div className={s.tile}>
          <strong>150</strong> км от Пловдив
        </div>
      </div>
    </>
  );
}
