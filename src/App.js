import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Save, RotateCcw, Calendar, Globe } from 'lucide-react';

const PlusMinusNextTool = () => {
  const [language, setLanguage] = useState('en');
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    plus: '',
    minus: '',
    next: ''
  });

  const translations = {
    en: {
      title: "Plus Minus Next",
      subtitle: "Weekly personal reflection tool",
      newReflection: "New Reflection",
      plus: "Plus",
      minus: "Minus",
      next: "Next",
      plusPlaceholder: "What went well this week?",
      minusPlaceholder: "What could be improved?",
      nextPlaceholder: "Next steps to take?",
      saveReflection: "Save Reflection",
      clear: "Clear",
      savedReflections: "Saved Reflections",
      delete: "Delete",
      noNote: "No note",
      howToUse: "How to use Plus Minus Next",
      plusInstruction: "Note everything that went well this week, successes and positive aspects.",
      minusInstruction: "Identify challenges, problems or areas that need improvement.",
      nextInstruction: "Plan next steps and actions to take for the following week.",
      weekdays: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday"
      },
      months: {
        january: "January",
        february: "February",
        march: "March",
        april: "April",
        may: "May",
        june: "June",
        july: "July",
        august: "August",
        september: "September",
        october: "October",
        november: "November",
        december: "December"
      }
    },
    it: {
      title: "Plus Minus Next",
      subtitle: "Strumento di riflessione personale settimanale",
      newReflection: "Nuova Riflessione",
      plus: "Plus",
      minus: "Minus",
      next: "Next",
      plusPlaceholder: "Cosa è andato bene questa settimana?",
      minusPlaceholder: "Cosa potrebbe essere migliorato?",
      nextPlaceholder: "Prossimi passi da intraprendere?",
      saveReflection: "Salva Riflessione",
      clear: "Cancella",
      savedReflections: "Riflessioni Salvate",
      delete: "Elimina",
      noNote: "Nessuna nota",
      howToUse: "Come usare Plus Minus Next",
      plusInstruction: "Annota tutto ciò che è andato bene questa settimana, i successi e gli aspetti positivi.",
      minusInstruction: "Identifica le sfide, i problemi o le aree che necessitano miglioramento.",
      nextInstruction: "Pianifica i prossimi passi e le azioni da intraprendere per la settimana successiva.",
      weekdays: {
        monday: "lunedì",
        tuesday: "martedì",
        wednesday: "mercoledì",
        thursday: "giovedì",
        friday: "venerdì",
        saturday: "sabato",
        sunday: "domenica"
      },
      months: {
        january: "gennaio",
        february: "febbraio",
        march: "marzo",
        april: "aprile",
        may: "maggio",
        june: "giugno",
        july: "luglio",
        august: "agosto",
        september: "settembre",
        october: "ottobre",
        november: "novembre",
        december: "dicembre"
      }
    },
    es: {
      title: "Plus Minus Next",
      subtitle: "Herramienta de reflexión personal semanal",
      newReflection: "Nueva Reflexión",
      plus: "Plus",
      minus: "Minus",
      next: "Next",
      plusPlaceholder: "¿Qué fue bien esta semana?",
      minusPlaceholder: "¿Qué podría mejorarse?",
      nextPlaceholder: "¿Próximos pasos a seguir?",
      saveReflection: "Guardar Reflexión",
      clear: "Limpiar",
      savedReflections: "Reflexiones Guardadas",
      delete: "Eliminar",
      noNote: "Sin nota",
      howToUse: "Cómo usar Plus Minus Next",
      plusInstruction: "Anota todo lo que fue bien esta semana, éxitos y aspectos positivos.",
      minusInstruction: "Identifica desafíos, problemas o áreas que necesitan mejora.",
      nextInstruction: "Planifica próximos pasos y acciones para la siguiente semana.",
      weekdays: {
        monday: "lunes",
        tuesday: "martes",
        wednesday: "miércoles",
        thursday: "jueves",
        friday: "viernes",
        saturday: "sábado",
        sunday: "domingo"
      },
      months: {
        january: "enero",
        february: "febrero",
        march: "marzo",
        april: "abril",
        may: "mayo",
        june: "junio",
        july: "julio",
        august: "agosto",
        september: "septiembre",
        october: "octubre",
        november: "noviembre",
        december: "diciembre"
      }
    },
    fr: {
      title: "Plus Minus Next",
      subtitle: "Outil de réflexion personnelle hebdomadaire",
      newReflection: "Nouvelle Réflexion",
      plus: "Plus",
      minus: "Minus",
      next: "Next",
      plusPlaceholder: "Qu'est-ce qui s'est bien passé cette semaine?",
      minusPlaceholder: "Qu'est-ce qui pourrait être amélioré?",
      nextPlaceholder: "Prochaines étapes à entreprendre?",
      saveReflection: "Sauvegarder la Réflexion",
      clear: "Effacer",
      savedReflections: "Réflexions Sauvegardées",
      delete: "Supprimer",
      noNote: "Aucune note",
      howToUse: "Comment utiliser Plus Minus Next",
      plusInstruction: "Notez tout ce qui s'est bien passé cette semaine, les succès et les aspects positifs.",
      minusInstruction: "Identifiez les défis, les problèmes ou les domaines qui nécessitent une amélioration.",
      nextInstruction: "Planifiez les prochaines étapes et actions à entreprendre pour la semaine suivante.",
      weekdays: {
        monday: "lundi",
        tuesday: "mardi",
        wednesday: "mercredi",
        thursday: "jeudi",
        friday: "vendredi",
        saturday: "samedi",
        sunday: "dimanche"
      },
      months: {
        january: "janvier",
        february: "février",
        march: "mars",
        april: "avril",
        may: "mai",
        june: "juin",
        july: "juillet",
        august: "août",
        september: "septembre",
        october: "octobre",
        november: "novembre",
        december: "décembre"
      }
    }
  };

  const t = translations[language];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const month = date.toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
    const day = date.getDate();
    const year = date.getFullYear();

    return `${t.weekdays[weekday]}, ${day} ${t.months[month]} ${year}`;
  };

  const handleInputChange = (field, value) => {
    setCurrentEntry(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const saveEntry = () => {
    if (currentEntry.plus.trim() || currentEntry.minus.trim() || currentEntry.next.trim()) {
      setEntries(prev => [currentEntry, ...prev]);
      setCurrentEntry({
        date: new Date().toISOString().split('T')[0],
        plus: '',
        minus: '',
        next: ''
      });
    }
  };

  const clearCurrent = () => {
    setCurrentEntry({
      date: new Date().toISOString().split('T')[0],
      plus: '',
      minus: '',
      next: ''
    });
  };

  const deleteEntry = (index) => {
    setEntries(prev => prev.filter((_, i) => i !== index));
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fefce8 0%, #fde68a 100%)',
      padding: '1rem'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    languageSelector: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '1rem'
    },
    languageBox: {
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '0.5rem',
      border: '1px solid #fbbf24',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    select: {
      background: 'transparent',
      color: '#92400e',
      fontWeight: '500',
      border: 'none',
      outline: 'none',
      cursor: 'pointer'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#92400e',
      marginBottom: '0.5rem'
    },
    subtitle: {
      color: '#b45309',
      fontSize: '1.125rem'
    },
    card: {
      background: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      marginBottom: '2rem',
      border: '2px solid #fbbf24'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.5rem'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#92400e'
    },
    dateContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#b45309'
    },
    dateInput: {
      background: '#fefce8',
      border: '1px solid #fbbf24',
      borderRadius: '6px',
      padding: '0.5rem 1rem',
      outline: 'none'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem'
    },
    columnCard: {
      borderRadius: '12px',
      padding: '1.5rem',
      border: '2px solid'
    },
    plusCard: {
      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
      borderColor: '#bbf7d0'
    },
    minusCard: {
      background: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
      borderColor: '#fca5a5'
    },
    nextCard: {
      background: 'linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%)',
      borderColor: '#93c5fd'
    },
    columnHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem'
    },
    iconContainer: {
      borderRadius: '50%',
      padding: '0.5rem',
      color: 'white'
    },
    plusIcon: {
      backgroundColor: '#22c55e'
    },
    minusIcon: {
      backgroundColor: '#ef4444'
    },
    nextIcon: {
      backgroundColor: '#3b82f6'
    },
    columnTitle: {
      fontSize: '1.25rem',
      fontWeight: '600'
    },
    plusTitle: {
      color: '#166534'
    },
    minusTitle: {
      color: '#991b1b'
    },
    nextTitle: {
      color: '#1e40af'
    },
    textarea: {
      width: '100%',
      height: '120px',
      background: 'rgba(255, 255, 255, 0.7)',
      border: '1px solid',
      borderRadius: '8px',
      padding: '0.75rem',
      resize: 'none',
      outline: 'none',
      fontSize: '0.875rem'
    },
    plusTextarea: {
      borderColor: '#86efac',
      color: '#166534'
    },
    minusTextarea: {
      borderColor: '#fca5a5',
      color: '#991b1b'
    },
    nextTextarea: {
      borderColor: '#93c5fd',
      color: '#1e40af'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '1.5rem'
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    saveButton: {
      background: '#eab308',
      color: 'white'
    },
    clearButton: {
      background: '#fbbf24',
      color: '#92400e'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#92400e',
      textAlign: 'center',
      marginBottom: '1.5rem'
    },
    entryCard: {
      background: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      border: '2px solid #fbbf24'
    },
    entryHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    entryDate: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#92400e'
    },
    deleteButton: {
      color: '#ef4444',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s'
    },
    entryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem'
    },
    entrySection: {
      borderRadius: '8px',
      padding: '1rem',
      borderLeft: '4px solid'
    },
    plusEntry: {
      background: '#f0fdf4',
      borderLeftColor: '#22c55e'
    },
    minusEntry: {
      background: '#fef2f2',
      borderLeftColor: '#ef4444'
    },
    nextEntry: {
      background: '#eff6ff',
      borderLeftColor: '#3b82f6'
    },
    entrySectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem'
    },
    entrySectionTitle: {
      fontWeight: '600'
    },
    entrySectionText: {
      fontSize: '0.875rem'
    },
    instructions: {
      marginTop: '3rem',
      background: '#fef3c7',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '2px solid #fbbf24'
    },
    instructionsTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#92400e',
      marginBottom: '0.75rem'
    },
    instructionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      fontSize: '0.875rem',
      color: '#b45309'
    }
  };

  return (
      <div style={styles.container}>
        <div style={styles.maxWidth}>
          {/* Language Selector */}
          <div style={styles.languageSelector}>
            <a href="https://duckintosh.com/">Duckintosh</a>
          </div>
          <div style={styles.languageSelector}>
            Credits  <a href="https://nesslabs.com/book" target="_blank">Tiny Experiments: How to Live Freely in a Goal-Obsessed World</a>
          </div>
          <div style={styles.languageSelector}>
            <div style={styles.languageBox}>
              <Globe size={16} color="#92400e" />
              <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  style={styles.select}
              >
                <option value="en">English</option>
                <option value="it">Italiano</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>

          </div>

          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.title}>{t.title}</h1>
            <p style={styles.subtitle}>{t.subtitle}</p>
          </div>

          {/* Current Entry Form */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>{t.newReflection}</h2>
              <div style={styles.dateContainer}>
                <Calendar size={20} />
                <input
                    type="date"
                    value={currentEntry.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    style={styles.dateInput}
                />
              </div>
            </div>

            <div style={styles.grid}>
              {/* Plus Column */}
              <div style={{...styles.columnCard, ...styles.plusCard}}>
                <div style={styles.columnHeader}>
                  <div style={{...styles.iconContainer, ...styles.plusIcon}}>
                    <Plus size={20} />
                  </div>
                  <h3 style={{...styles.columnTitle, ...styles.plusTitle}}>{t.plus}</h3>
                </div>
                <textarea
                    value={currentEntry.plus}
                    onChange={(e) => handleInputChange('plus', e.target.value)}
                    placeholder={t.plusPlaceholder}
                    style={{...styles.textarea, ...styles.plusTextarea}}
                />
              </div>

              {/* Minus Column */}
              <div style={{...styles.columnCard, ...styles.minusCard}}>
                <div style={styles.columnHeader}>
                  <div style={{...styles.iconContainer, ...styles.minusIcon}}>
                    <Minus size={20} />
                  </div>
                  <h3 style={{...styles.columnTitle, ...styles.minusTitle}}>{t.minus}</h3>
                </div>
                <textarea
                    value={currentEntry.minus}
                    onChange={(e) => handleInputChange('minus', e.target.value)}
                    placeholder={t.minusPlaceholder}
                    style={{...styles.textarea, ...styles.minusTextarea}}
                />
              </div>

              {/* Next Column */}
              <div style={{...styles.columnCard, ...styles.nextCard}}>
                <div style={styles.columnHeader}>
                  <div style={{...styles.iconContainer, ...styles.nextIcon}}>
                    <ArrowRight size={20} />
                  </div>
                  <h3 style={{...styles.columnTitle, ...styles.nextTitle}}>{t.next}</h3>
                </div>
                <textarea
                    value={currentEntry.next}
                    onChange={(e) => handleInputChange('next', e.target.value)}
                    placeholder={t.nextPlaceholder}
                    style={{...styles.textarea, ...styles.nextTextarea}}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div style={styles.buttonContainer}>
              <button
                  onClick={saveEntry}
                  style={{...styles.button, ...styles.saveButton}}
                  onMouseOver={(e) => e.target.style.background = '#ca8a04'}
                  onMouseOut={(e) => e.target.style.background = '#eab308'}
              >
                <Save size={20} />
                {t.saveReflection}
              </button>
              <button
                  onClick={clearCurrent}
                  style={{...styles.button, ...styles.clearButton}}
                  onMouseOver={(e) => e.target.style.background = '#f59e0b'}
                  onMouseOut={(e) => e.target.style.background = '#fbbf24'}
              >
                <RotateCcw size={20} />
                {t.clear}
              </button>
            </div>
          </div>

          {/* Saved Entries */}
          {entries.length > 0 && (
              <div>
                <h2 style={styles.sectionTitle}>{t.savedReflections}</h2>
                {entries.map((entry, index) => (
                    <div key={index} style={styles.entryCard}>
                      <div style={styles.entryHeader}>
                        <h3 style={styles.entryDate}>
                          {formatDate(entry.date)}
                        </h3>
                        <button
                            onClick={() => deleteEntry(index)}
                            style={styles.deleteButton}
                            onMouseOver={(e) => e.target.style.color = '#dc2626'}
                            onMouseOut={(e) => e.target.style.color = '#ef4444'}
                        >
                          {t.delete}
                        </button>
                      </div>

                      <div style={styles.entryGrid}>
                        <div style={{...styles.entrySection, ...styles.plusEntry}}>
                          <div style={styles.entrySectionHeader}>
                            <Plus size={16} color="#22c55e" />
                            <span style={{...styles.entrySectionTitle, color: '#166534'}}>{t.plus}</span>
                          </div>
                          <p style={{...styles.entrySectionText, color: '#166534'}}>{entry.plus || t.noNote}</p>
                        </div>

                        <div style={{...styles.entrySection, ...styles.minusEntry}}>
                          <div style={styles.entrySectionHeader}>
                            <Minus size={16} color="#ef4444" />
                            <span style={{...styles.entrySectionTitle, color: '#991b1b'}}>{t.minus}</span>
                          </div>
                          <p style={{...styles.entrySectionText, color: '#991b1b'}}>{entry.minus || t.noNote}</p>
                        </div>

                        <div style={{...styles.entrySection, ...styles.nextEntry}}>
                          <div style={styles.entrySectionHeader}>
                            <ArrowRight size={16} color="#3b82f6" />
                            <span style={{...styles.entrySectionTitle, color: '#1e40af'}}>{t.next}</span>
                          </div>
                          <p style={{...styles.entrySectionText, color: '#1e40af'}}>{entry.next || t.noNote}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
          )}

          {/* Instructions */}
          <div style={styles.instructions}>
            <h3 style={styles.instructionsTitle}>{t.howToUse}</h3>
            <div style={styles.instructionsGrid}>
              <div>
                <strong style={{color: '#166534'}}>{t.plus}:</strong> {t.plusInstruction}
              </div>
              <div>
                <strong style={{color: '#991b1b'}}>{t.minus}:</strong> {t.minusInstruction}
              </div>
              <div>
                <strong style={{color: '#1e40af'}}>{t.next}:</strong> {t.nextInstruction}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PlusMinusNextTool;