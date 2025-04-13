import React, { useState } from "react";
import "./Styles/UserInfo.css";

const initialData = [
  { label: "Nome", value: "Spot MKT", editable: true },
  { label: "Email", value: "comercial@spotmidiadigital.com.br", editable: true },
  { label: "Website", value: "spotm.com.br"},
  { label: "Perfil", value: "Cliente Empresarial" },
  { label: "Data de Cadastro", value: "01/01/2023" },
  { label: "Último Acesso", value: "15/04/2023" },
  { label: "Status", value: "Ativo" },
  { label: "Campanhas Ativas", value: "8" },
  { label: "Campanhas Finalizadas", value: "5" },
  { label: "Taxa de Conversão", value: "4.5%" },
  { label: "ROI Médio", value: "220%" },
  { label: "Gestor Responsável", value: "João Silva" },
  { label: "Telefone", value: "+55 31 99435-4230" },
  { label: "Endereço", value: "Rua Rio de Janeiro, 1253,Belo Horizonte, MG" },
];

const UserInfo = () => {
  const [data, setData] = useState(initialData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const handleEdit = (index) => {
    setEditingIndex(index);
    setTempValue(data[index].value);
  };

  const handleSave = (index) => {
    const newData = [...data];
    newData[index].value = tempValue;
    setData(newData);
    setEditingIndex(null);
  };

  const getIcon = (label) => {
    switch (label) {
      case "Telefone":
        return "📱";
      case "Email":
        return "✉️";
      case "Nome":
        return "🧾";
      default:
        return "";
    }
  };

  return (
    <div className="user-info-page">
      <div className="header">
        <h1 className="user-info-title">👤 Dados do Usuário</h1>
        <p className="subtitle">Informações detalhadas do usuário para gestão e análise.</p>
      </div>
      <div className="user-info-container">
        {data.map((item, index) => (
          <div key={index} className="user-info-card">
            <span className="label">
              {getIcon(item.label)} {item.label}:
            </span>

            {editingIndex === index ? (
              <input
                type="text"
                className="edit-input"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
              />
            ) : (
              <span className="value">{item.value}</span>
            )}

            {item.editable && (
              <button
                className="edit-button"
                onClick={() =>
                  editingIndex === index
                    ? handleSave(index)
                    : handleEdit(index)
                }
              >
                {editingIndex === index ? "💾 Salvar" : "✏️ Editar"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
