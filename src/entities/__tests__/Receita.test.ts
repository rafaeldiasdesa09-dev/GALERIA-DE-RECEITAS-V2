import { Receita } from "../Receita";

describe("Receita", () => {

  // TODO 1: Testar criacao com dados corretos
  it("deve criar uma receita com os dados corretos", () => {
    const r = new Receita(1, "Bolo", "Delicioso", "30 min");

    expect(r.id).toBe(1);
    expect(r.titulo).toBe("Bolo");
    expect(r.descricao).toBe("Delicioso");
    expect(r.tempo).toBe("30 min");
    expect(r.foto).toBeNull();
  });

  // TODO 2: Testar criacao com foto
  it("deve criar uma receita com foto", () => {
    const r = new Receita(1, "Bolo", "Bom", "30 min", "/uploads/foto.jpg");

    expect(r.foto).toBe("/uploads/foto.jpg");
  });

  // TODO 3: Testar validar() com titulo vazio
  it("deve retornar erro quando titulo esta vazio", () => {
    const erros = Receita.validar({ titulo: "" });

    expect(erros).toContain("Titulo obrigatorio");
  });

  // TODO 4: Testar validar() com titulo curto
  it("deve retornar erro quando titulo tem menos de 3 caracteres", () => {
    const erros = Receita.validar({ titulo: "ab" });

    expect(erros).toContain("Titulo deve ter pelo menos 3 caracteres");
  });

  // TODO 5: Testar validar() com dados corretos
  it("deve retornar array vazio quando titulo e valido", () => {
    const erros = Receita.validar({ titulo: "Bolo de Chocolate" });

    expect(erros).toHaveLength(0);
  });

  // TODO 6: Testar fromJSON()
  it("deve criar instancia a partir de JSON", () => {
    const json = {
      id: 5,
      titulo: "Pao",
      descricao: "Caseiro",
      tempo: "2h",
      foto: null
    };

    const r = Receita.fromJSON(json);

    expect(r).toBeInstanceOf(Receita);
    expect(r.id).toBe(5);
    expect(r.titulo).toBe("Pao");
    expect(r.descricao).toBe("Caseiro");
    expect(r.tempo).toBe("2h");
    expect(r.foto).toBeNull();
  });

  // TODO 7: Testar toJSON()
  it("deve converter para JSON corretamente", () => {
    const r = new Receita(1, "Bolo", "Bom", "30 min", "/uploads/foto.jpg");

    const json = r.toJSON();

    expect(json).toEqual({
      id: 1,
      titulo: "Bolo",
      descricao: "Bom",
      tempo: "30 min",
      foto: "/uploads/foto.jpg"
    });
  });

  // TODO 8: Testar setter titulo vazio
  it("deve lancar erro ao setar titulo vazio", () => {
    const r = new Receita(1, "Bolo", "", "");

    expect(() => {
      r.titulo = "";
    }).toThrow("Titulo obrigatorio");
  });

  // TODO 9: Testar setter titulo valido
  it("deve atualizar titulo com valor valido", () => {
    const r = new Receita(1, "Antigo", "", "");

    r.titulo = "Novo";

    expect(r.titulo).toBe("Novo");
  });

  // TODO 10: Testar setter foto
  it("deve atualizar foto", () => {
    const r = new Receita(1, "Bolo", "", "");

    expect(r.foto).toBeNull();

    r.foto = "/uploads/nova.jpg";

    expect(r.foto).toBe("/uploads/nova.jpg");
  });

});