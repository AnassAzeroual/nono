import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("web_receptions", { schema: "auclairm_espaceclient" })
export class WebReceptions {
  @PrimaryGeneratedColumn({ type: "int", name: "ref_wreception" })
  refWreception: number;

  @Column("int", { name: "refbrc_wreception", nullable: true })
  refbrcWreception: number | null;

  @Column("int", { name: "refclient_wreception", nullable: true })
  refclientWreception: number | null;

  @Column("varchar", { name: "codebrc_wreception", nullable: true, length: 50 })
  codebrcWreception: string | null;

  @Column("date", { name: "dreception_wreception", nullable: true })
  dreceptionWreception: string | null;

  @Column("varchar", { name: "site_wreception", nullable: true, length: 100 })
  siteWreception: string | null;

  @Column("int", { name: "totpieces_wreception", nullable: true })
  totpiecesWreception: number | null;

  @Column("varchar", { name: "etatbrc_wreception", nullable: true, length: 10 })
  etatbrcWreception: string | null;

  @Column("varchar", { name: "flag_wreception", nullable: true, length: 5 })
  flagWreception: string | null;
}
