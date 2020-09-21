import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("web_receptions_detail", { schema: "auclairm_espaceclient" })
export class WebReceptionsDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "ref_wdreception" })
  refWdreception: number;

  @Column("int", { name: "refbrc_wdreception", nullable: true })
  refbrcWdreception: number | null;

  @Column("varchar", {
    name: "designationarticle_wdreception",
    nullable: true,
    length: 200,
  })
  designationarticleWdreception: string | null;

  @Column("varchar", { name: "qte_wdreception", nullable: true, length: 50 })
  qteWdreception: string | null;

  @Column("varchar", { name: "flag_wdreception", nullable: true, length: 5 })
  flagWdreception: string | null;
}
