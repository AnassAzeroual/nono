import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("web_users", { schema: "auclairm_espaceclient" })
@Unique(['loginWuser'])
export class WebUsers {
  @PrimaryGeneratedColumn({ type: "int", name: "ref_wuser" })
  refWuser: number;

  @Column("int", { name: "refacteur_wuser", nullable: true })
  refacteurWuser: number | null;

  @Column("varchar", {
    name: "intituleacteur_wuser",
    nullable: true,
    length: 100,
  })
  intituleacteurWuser: string | null;

  @Column("int", { name: "refuser_wuser", nullable: true })
  refuserWuser: number | null;

  @Column("varchar", { name: "login_wuser", nullable: true, length: 20 })
  loginWuser: string | null;

  @Column("varchar", { name: "password_wuser", nullable: true, length: 20, select: false })
  passwordWuser: string | null;

  @Column("varchar", { name: "nom_wuser", nullable: true, length: 100 })
  nomWuser: string | null;

  @Column("varchar", { name: "prenom_wuser", length: 100 })
  prenomWuser: string;

  @Column("int", { name: "refsite_wuser", nullable: true })
  refsiteWuser: number | null;

  @Column("int", { name: "refdep_wuser" })
  refdepWuser: number;

  @Column("int", { name: "refprofil_wuser", default: () => "'1'" })
  refprofilWuser: number;

  @Column("varchar", { name: "profil_wuser", nullable: true, length: 50 })
  profilWuser: string | null;

  @Column("varchar", { name: "accesespace_wuser", nullable: true, length: 1 })
  accesespaceWuser: string | null;

  @Column("varchar", {
    name: "accesportabilite_wuser",
    nullable: true,
    length: 1,
  })
  accesportabiliteWuser: string | null;

  @Column("varchar", { name: "etat_wuser", length: 20 })
  etatWuser: string;

  @Column("varchar", { name: "flag_wuser", nullable: true, length: 5 })
  flagWuser: string | null;
}
