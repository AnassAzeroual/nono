import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("web_porteurs", { schema: "auclairm_espaceclient" })
export class WebPorteurs {
  @PrimaryGeneratedColumn({ type: "int", name: "ref_wdotporteur" })
  refWdotporteur: number;

  @Column("int", { name: "refprojet_wdotporteur", nullable: true })
  refprojetWdotporteur: number | null;

  @Column("int", { name: "refsite_wdotporteur", nullable: true })
  refsiteWdotporteur: number | null;

  @Column("varchar", { name: "codesite_wdotporteur", length: 50 })
  codesiteWdotporteur: string;

  @Column("int", { name: "refdep_wdotporteur", nullable: true })
  refdepWdotporteur: number | null;

  @Column("varchar", { name: "codedep_wdotporteur", length: 50 })
  codedepWdotporteur: string;

  @Column("int", { name: "refmetier_wdotporteur", nullable: true })
  refmetierWdotporteur: number | null;

  @Column("varchar", { name: "metier_wdotporteur", length: 200 })
  metierWdotporteur: string;

  @Column("int", { name: "refporteur_wdotporteur", nullable: true })
  refporteurWdotporteur: number | null;

  @Column("int", { name: "refdotporteur_wdotporteur", nullable: true })
  refdotporteurWdotporteur: number | null;

  @Column("varchar", {
    name: "matricule_wdotporteur",
    nullable: true,
    length: 50,
  })
  matriculeWdotporteur: string | null;

  @Column("varchar", {
    name: "nomprenom_wdotporteur",
    nullable: true,
    length: 200,
  })
  nomprenomWdotporteur: string | null;

  @Column("varchar", { name: "genre_wdotporteur", length: 10 })
  genreWdotporteur: string;

  @Column("int", { name: "article_ref_wdotporteur", nullable: true })
  articleRefWdotporteur: number | null;

  @Column("varchar", {
    name: "article_intitule_wdotporteur",
    nullable: true,
    length: 200,
  })
  articleIntituleWdotporteur: string | null;

  @Column("int", { name: "qtepardotation_wdotporteur", nullable: true })
  qtepardotationWdotporteur: number | null;

  @Column("int", { name: "refgrilletaille_wdotporteur", nullable: true })
  refgrilletailleWdotporteur: number | null;

  @Column("varchar", { name: "taille_wdotporteur", nullable: true, length: 10 })
  tailleWdotporteur: string | null;

  @Column("varchar", { name: "etat_wdotporteur", nullable: true, length: 5 })
  etatWdotporteur: string | null;

  @Column("varchar", { name: "flag_wdotporteur", nullable: true, length: 5 })
  flagWdotporteur: string | null;
}
