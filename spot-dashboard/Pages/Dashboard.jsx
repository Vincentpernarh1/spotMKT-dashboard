import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Dashboard.css";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarContentType, setSidebarContentType] = useState("notificacoes");
  const navigate = useNavigate();

  const toggleSidebar = (type = "notificacoes") => {
    setSidebarContentType(type);
    setShowSidebar(true);
    // setShowSidebar(prev => !prev);
  };

  

  const goToUserInfo = () => {
    navigate("/user-info");
  };

  return (
    <div className="dashboard-page">
      {/* Sidebar dinâmica */}
      {showSidebar && (
        <aside className="notification-sidebar">
        <div className="section-header-sidebar">
          <h3 className="sidebar-title">
            {{
              notificacoes: "🔔 Notificações Antigas",
              calendario: "📆 Ações do Calendário",
              historico: "📚 Histórico de Ações",
              demandas: "📝 Demandas Solicitadas",
            }[sidebarContentType]}
          </h3>
          </div>

          <ul className="sidebar-list">
            {sidebarContentType === "notificacoes" && (
              <>
                <li>📅 Campanha Março reavaliada</li>
                <li>🔁 Reunião reagendada para 12/04</li>
                <li>📢 Aviso de atualização no CRM</li>
                <li>📊 Novo insight disponível</li>
                <li>🛠️ Manutenção programada para 15/04</li>
                <li>📈 Relatório de desempenho enviado</li>
              </>
            )}

            {sidebarContentType === "calendario" && (
              <>
              
                <li>📢 15/04 - Lançamento da Campanha "Outono Criativo"</li>
                <li>💬 17/04 - Reunião com equipe de conteúdo (10h)</li>
                <li>🎯 18/04 - A/B Teste com novo CTA no site</li>
                <li>📈 19/04 - Análise de desempenho dos anúncios</li>
                <li>✍️ 20/04 - Aprovação do briefing para Campanha de Maio</li>
                <li>📦 21/04 - Revisão de estoque promocional</li>
                <li>📣 22/04 - Publicação nas redes sociais</li>
              </>
            )}

            {sidebarContentType === "historico" && (
              <>
                <li>✅ Campanha de Abril finalizada com sucesso.</li>
                <li>✅ Ajustes no funil de vendas implementados.</li>
                <li>✅ Posts orgânicos entregues.</li>
                <li>✅ Relatórios mensais revisados.</li>
                <li>✅ Integração com CRM concluída.</li>
              </>
            )}

            {sidebarContentType === "demandas" && (
              <>
                <li>🆕 Criação de campanha Google Ads - Pendente</li>
                <li>🆗 Edição de banners para Instagram - Concluído</li>
                <li>📌 Ajustes no site institucional - Em andamento</li>
                <li>📤 Disparo de e-mail marketing - Agendado</li>
              </>
            )}
          </ul>

          <button className="close-sidebar" onClick={() => setShowSidebar(false)}>
            Fechar
          </button>
        </aside>
      )}

      {/* Top Header */}
    <header className="dashboard-header">
        <div>
            <h1 className="dashboard-title">Painel do Cliente</h1>
            <span className="dashboard-welcome">Bem-vindo, Spot MKT 🚀</span>
        </div>
        <div className="gears">
            <svg className="gear" viewBox="0 0 100 100">
            <path fill="white" d="M94 56V44l-9-3c-1-3-2-6-3-9l5-9-8-8-9 5c-3-1-6-2-9-3L56 6H44l-3 9c-3 1-6 2-9 3l-9-5-8 8 5 9c-1 3-2 6-3 9L6 44v12l9 3c1 3 2 6 3 9l-5 9 8 8 9-5c3 1 6 2 9 3l3 9h12l3-9c3-1 6-2 9-3l9 5 8-8-5-9c1-3 2-6 3-9l9-3zM50 65a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"/>
            </svg>
            <svg className="gear reverse" viewBox="0 0 100 100">
            <path fill="white" d="M94 56V44l-9-3c-1-3-2-6-3-9l5-9-8-8-9 5c-3-1-6-2-9-3L56 6H44l-3 9c-3 1-6 2-9 3l-9-5-8 8 5 9c-1 3-2 6-3 9L6 44v12l9 3c1 3 2 6 3 9l-5 9 8 8 9-5c3 1 6 2 9 3l3 9h12l3-9c3-1 6-2 9-3l9 5 8-8-5-9c1-3 2-6 3-9l9-3zM50 65a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"/>
            </svg>
        </div>
    </header>


      {/* Main Content */}
      <main className="dashboard-main">
        {/* Métricas */}
        <section className="dashboard-section dashboard-metrics">
          <h2 className="section-title">📊 Resumo de Métricas</h2>
          <div className="metrics-grid">
            <Card title="Campanhas Ativas" value="8" />
            <Card title="Taxa de Conversão" value="4.5%" />
            <Card title="ROI Médio" value="220%" />
          </div>
        </section>

        {/* Notificações */}
        <section className="dashboard-section dashboard-notifications">
          <div className="section-header">
            <h2 className="section-title">🔔 Notificações</h2>
            <button onClick={() => toggleSidebar("notificacoes")} className="view-all-btn">
              Ver todas →
            </button>
          </div>
          <ul className="section-list">
            <li>📩 Nova mensagem do gestor.</li>
            <li>📈 Relatório semanal disponível.</li>
            <li>🛠️ Sistema em manutenção dia 15/04.</li>
          </ul>
        </section>

        {/* Demandas */}
        <section className="dashboard-section dashboard-demandas">
          <div className="section-header">
            <h2 className="section-title">📝 Solicitação de Demandas</h2>
            <button onClick={() => toggleSidebar("demandas")} className="view-all-btn">
              Ver todas →
            </button>
          </div>
          <p className="section-description">
            <li>
            📌 Ajustes no site institucional - Em andamento</li>
            <li>🆕 Criação de campanha Google Ads - Pendente</li>
            
          </p>
        </section>

        {/* Calendário */}
        <section className="dashboard-section dashboard-calendar">
          <div className="section-header">
            <h2 className="section-title">📆 Calendário de Ações</h2>
            <button onClick={() => toggleSidebar("calendario")} className="view-all-btn">
              Ver todas →
            </button>
          </div>
          <ul className="calendar-list">
            <li>📢 15/04 - Lançamento da Campanha "Outono Criativo"</li>
            <li>💬 17/04 - Reunião com equipe de conteúdo (10h)</li>
            <li>🎯 18/04 - A/B Teste com novo CTA no site</li>
            <li>📈 19/04 - Análise de desempenho dos anúncios</li>
          </ul>
        </section>

        {/* Histórico */}
        <section className="dashboard-section dashboard-history">
          <div className="section-header">
            <h2 className="section-title">📚 Histórico de Ações</h2>
            <button onClick={() => toggleSidebar("historico")} className="view-all-btn">
              Ver todas →
            </button>
          </div>
          <ul className="section-list">
            <li>✅ Campanha de Abril finalizada com sucesso.</li>
            <li>✅ Ajustes no funil de vendas implementados.</li>
            <li>✅ Posts orgânicos entregues.</li>
          </ul>
        </section>

        {/* Configurações */}
        <section className="dashboard-section dashboard-settings clickable" onClick={goToUserInfo}>
        <div className="section-header">
          <h2 className="section-title">⚙️ Configurações</h2>
          </div>
          <p className="section-description">
            Clique aqui para ver os dados do usuário.
          </p>
        </section>
      </main>
    </div>
  );
};

// Card de Métricas
const Card = ({ title, value }) => (
  <div className="metric-card">
    <p className="metric-title">{title}</p>
    <p className="metric-value">{value}</p>
  </div>
);

export default Dashboard;
