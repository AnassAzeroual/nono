import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("web_articles", { schema: "auclairm_espaceclient" })
export class WebArticles {
  @PrimaryGeneratedColumn({ type: "int", name: "ref_artweb" })
  refArtweb: number;

  @Column("int", { name: "refacteur_artweb", nullable: true })
  refacteurArtweb: number | null;

  @Column("int", { name: "refcontrat_artweb", nullable: true })
  refcontratArtweb: number | null;

  @Column("varchar", { name: "typemvt_artweb", nullable: true, length: 20 })
  typemvtArtweb: string | null;

  @Column("int", { name: "reprojet_artweb", nullable: true })
  reprojetArtweb: number | null;

  @Column("varchar", { name: "projet_artweb", nullable: true, length: 100 })
  projetArtweb: string | null;

  @Column("int", { name: "refsite_artweb", nullable: true })
  refsiteArtweb: number | null;

  @Column("varchar", { name: "site_artweb", nullable: true, length: 100 })
  siteArtweb: string | null;

  @Column("int", { name: "refdep_artweb", nullable: true })
  refdepArtweb: number | null;

  @Column("varchar", {
    name: "departement_artweb",
    nullable: true,
    length: 100,
  })
  departementArtweb: string | null;

  @Column("int", { name: "refmetier_artweb", nullable: true })
  refmetierArtweb: number | null;

  @Column("varchar", { name: "metier_artweb", nullable: true, length: 100 })
  metierArtweb: string | null;

  @Column("int", { name: "refporteur_artweb", nullable: true })
  refporteurArtweb: number | null;

  @Column("varchar", { name: "matricule_artweb", nullable: true, length: 100 })
  matriculeArtweb: string | null;

  @Column("varchar", {
    name: "nomprenomporteur_artweb",
    nullable: true,
    length: 100,
  })
  nomprenomporteurArtweb: string | null;

  @Column("varchar", {
    name: "porteurcrypt_artweb",
    nullable: true,
    length: 150,
  })
  porteurcryptArtweb: string | null;

  @Column("varchar", { name: "clecrypt_artweb", nullable: true, length: 5 })
  clecryptArtweb: string | null;

  @Column("int", { name: "reffamniv1_artweb", nullable: true })
  reffamniv1Artweb: number | null;

  @Column("varchar", { name: "famniv1_artweb", nullable: true, length: 100 })
  famniv1Artweb: string | null;

  @Column("int", { name: "reffamniv2_artweb", nullable: true })
  reffamniv2Artweb: number | null;

  @Column("varchar", { name: "famniv2_artweb", nullable: true, length: 100 })
  famniv2Artweb: string | null;

  @Column("int", { name: "reffamniv3_artweb", nullable: true })
  reffamniv3Artweb: number | null;

  @Column("varchar", { name: "famniv3_artweb", nullable: true, length: 100 })
  famniv3Artweb: string | null;

  @Column("int", { name: "refarticle_artweb", nullable: true })
  refarticleArtweb: number | null;

  @Column("int", { name: "refarticleprojet_artweb", nullable: true })
  refarticleprojetArtweb: number | null;

  @Column("int", { name: "refserieetiquette_artweb", nullable: true })
  refserieetiquetteArtweb: number | null;

  @Column("varchar", {
    name: "cbarreserieetiquette_artweb",
    nullable: true,
    length: 20,
  })
  cbarreserieetiquetteArtweb: string | null;

  @Column("varchar", {
    name: "codearticle_artweb",
    nullable: true,
    length: 100,
  })
  codearticleArtweb: string | null;

  @Column("varchar", {
    name: "intitulearticle_artweb",
    nullable: true,
    length: 100,
  })
  intitulearticleArtweb: string | null;

  @Column("varchar", { name: "genre_artweb", nullable: true, length: 100 })
  genreArtweb: string | null;

  @Column("varchar", {
    name: "abrevcouleurdom_artweb",
    nullable: true,
    length: 10,
  })
  abrevcouleurdomArtweb: string | null;

  @Column("varchar", { name: "couleur_artweb", nullable: true, length: 100 })
  couleurArtweb: string | null;

  @Column("varchar", { name: "brand_artweb", nullable: true, length: 100 })
  brandArtweb: string | null;

  @Column("varchar", {
    name: "specificites_artweb",
    nullable: true,
    length: 100,
  })
  specificitesArtweb: string | null;

  @Column("varchar", {
    name: "reglechange_artweb",
    nullable: true,
    length: 100,
  })
  reglechangeArtweb: string | null;

  @Column("varchar", { name: "taille_artweb", nullable: true, length: 20 })
  tailleArtweb: string | null;

  @Column("int", { name: "qte_artweb", nullable: true })
  qteArtweb: number | null;

  @Column("int", { name: "tottrait_artweb", nullable: true })
  tottraitArtweb: number | null;

  @Column("int", { name: "totreparation_artweb", nullable: true })
  totreparationArtweb: number | null;

  @Column("int", { name: "totreforme_artweb", nullable: true })
  totreformeArtweb: number | null;

  @Column("varchar", { name: "flag_artweb", nullable: true, length: 5 })
  flagArtweb: string | null;
}
