import React from 'react';
import { Monitor, Database, BarChart3, Headphones, Phone, Zap, Shield, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const TechnologySection = () => {
  const technologies = [
    {
      icon: Phone,
      title: 'Zaawansowane dialery',
      description: 'Predictive, progressive i preview dialing',
      features: ['Auto-dialing', 'Call routing', 'Queue management', 'Real-time monitoring'],
      integration: 'Asterisk, FreePBX, 3CX'
    },
    {
      icon: Database,
      title: 'Integracje CRM',
      description: 'Pełna synchronizacja z popularnymi systemami',
      features: ['Salesforce', 'HubSpot', 'Pipedrive', 'Custom API'],
      integration: 'REST API, Webhooks, Real-time sync'
    },
    {
      icon: BarChart3,
      title: 'Analityka i raporty',
      description: 'Szczegółowe metryki wydajności w czasie rzeczywistym',
      features: ['Conversion tracking', 'Agent performance', 'Campaign ROI', 'Custom dashboards'],
      integration: 'Power BI, Google Analytics, Mixpanel'
    },
    {
      icon: Headphones,
      title: 'Quality Assurance',
      description: 'Monitoring jakości i szkolenia agentów',
      features: ['Call recording', 'Speech analytics', 'Scoring system', 'Coaching tools'],
      integration: 'AI-powered quality monitoring'
    }
  ];

  const capabilities = [
    { icon: Zap, metric: '1000+', label: 'Połączeń na godzinę', description: 'Maksymalna przepustowość systemu' },
    { icon: Shield, metric: '99.9%', label: 'Uptime SLA', description: 'Gwarantowana dostępność systemu' },
    { icon: Settings, metric: '50+', label: 'Integracji API', description: 'Kompatybilność z zewnętrznymi systemami' },
    { icon: Monitor, metric: '24/7', label: 'Monitoring', description: 'Ciągłe monitorowanie wydajności' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
            Nowoczesna technologia CallCenter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wykorzystujemy najnowsze rozwiązania technologiczne dla maksymalnej efektywności 
            i najwyższej jakości obsługi telefonicznej.
          </p>
        </motion.div>

        {/* Technology Stack */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center group-hover:bg-navy/20 transition-colors">
                  <tech.icon className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{tech.title}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Kluczowe funkcjonalności:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-navy rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-500 mb-1">Kompatybilność:</div>
                <div className="text-sm font-medium text-navy">{tech.integration}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-navy rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Wydajność i niezawodność
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Nasza infrastruktura technologiczna zapewnia najwyższą jakość obsługi 
              i maksymalną efektywność operacyjną.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{capability.metric}</div>
                <div className="text-lg font-semibold mb-2 text-white">{capability.label}</div>
                <div className="text-sm text-white/80">{capability.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-navy mb-8">Integrujemy się z popularnymi narzędziami</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {/* Integration logos/names */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Database className="w-6 h-6 text-gray-500" />
              </div>
              <div className="text-sm font-medium text-gray-600">Salesforce</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-gray-500" />
              </div>
              <div className="text-sm font-medium text-gray-600">HubSpot</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-gray-500" />
              </div>
              <div className="text-sm font-medium text-gray-600">Pipedrive</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Settings className="w-6 h-6 text-gray-500" />
              </div>
              <div className="text-sm font-medium text-gray-600">Zendesk</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Shield className="w-6 h-6 text-gray-500" />
              </div>
              <div className="text-sm font-medium text-gray-600">Microsoft</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Zap className="w-6 h-6 text-gray-500" />
              </div>
              <div className="text-sm font-medium text-gray-600">Zapier</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;