"use client";

import Image from 'next/image';
import Link from 'next/link';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';

// Define interfaces for proper typing
interface Medicine {
  id: number;
  name: string;
  time: string;
  dosage: string;
  frequency: string;
  enabled: boolean;
}

interface EmergencyContact {
  id: number;
  name: string;
  phone: string;
  relationship: string;
  priority: string;
}

interface Alert {
  type: string;
  level: string;
  message: string;
  timestamp: string;
}

interface BabySize {
  size: string;
  length: string;
  description: string;
}

export default function HeartMonitor() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [fetalHeartRate, setFetalHeartRate] = useState<number>(0);
  const [maternalHeartRate, setMaternalHeartRate] = useState<number>(0);
  const [fetalMovement, setFetalMovement] = useState<number>(0);
  const [connectionStatus, setConnectionStatus] = useState<string>('Disconnected');
  
  // Alert states - properly typed
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  
  // Existing feature states - properly typed
  const [pregnancyDate, setPregnancyDate] = useState<string>('');
  const [weeksPregnant, setWeeksPregnant] = useState<number>(0);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [showMedicineForm, setShowMedicineForm] = useState<boolean>(false);
  const [babyMessage, setBabyMessage] = useState<string>('');
  const [showBabyMessage, setShowBabyMessage] = useState<boolean>(false);
  
  // Emergency Contact states - properly typed
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([]);
  const [showEmergencyForm, setShowEmergencyForm] = useState<boolean>(false);
  const [showEmergencyAlert, setShowEmergencyAlert] = useState<boolean>(false);
  
  // Baby size data by week (same as before)
  const babySizeData: Record<number, BabySize> = {
    4: { size: "Poppy seed", length: "2mm", description: "Just implanted!" },
    5: { size: "Sesame seed", length: "3mm", description: "Heart is forming" },
    6: { size: "Lentil", length: "5mm", description: "Heart starts beating" },
    7: { size: "Blueberry", length: "8mm", description: "Brain developing" },
    8: { size: "Kidney bean", length: "1.6cm", description: "Arms and legs forming" },
    9: { size: "Grape", length: "2.3cm", description: "Fingers and toes appear" },
    10: { size: "Kumquat", length: "3.1cm", description: "All organs formed" },
    11: { size: "Fig", length: "4.1cm", description: "Baby can hiccup" },
    12: { size: "Lime", length: "5.4cm", description: "Reflexes developing" },
    13: { size: "Pea pod", length: "7.4cm", description: "Second trimester begins" },
    14: { size: "Lemon", length: "8.7cm", description: "Baby can make faces" },
    15: { size: "Apple", length: "10.1cm", description: "Can sense light" },
    16: { size: "Avocado", length: "11.6cm", description: "You might feel movement" },
    17: { size: "Turnip", length: "13cm", description: "Baby can hear you" },
    18: { size: "Bell pepper", length: "14.2cm", description: "Yawning and stretching" },
    19: { size: "Tomato", length: "15.3cm", description: "Protective coating forming" },
    20: { size: "Banana", length: "16.4cm", description: "Halfway point!" },
    21: { size: "Carrot", length: "26.7cm", description: "Rapid brain development" },
    22: { size: "Papaya", length: "27.8cm", description: "Senses developing" },
    23: { size: "Large mango", length: "28.9cm", description: "Can respond to sound" },
    24: { size: "Corn", length: "30cm", description: "Viable outside womb" },
    25: { size: "Rutabaga", length: "34.6cm", description: "Fat layers forming" },
    26: { size: "Scallion", length: "35.6cm", description: "Eyes can open" },
    27: { size: "Cauliflower", length: "36.6cm", description: "Third trimester begins" },
    28: { size: "Eggplant", length: "37.6cm", description: "Dreaming begins" },
    29: { size: "Butternut squash", length: "38.6cm", description: "Muscles strengthening" },
    30: { size: "Cabbage", length: "39.9cm", description: "Brain growing rapidly" },
    31: { size: "Coconut", length: "41.1cm", description: "Major organ development complete" },
    32: { size: "Jicama", length: "42.4cm", description: "Bones hardening" },
    33: { size: "Pineapple", length: "43.7cm", description: "Immune system developing" },
    34: { size: "Cantaloupe", length: "45cm", description: "Central nervous system maturing" },
    35: { size: "Honeydew melon", length: "46.2cm", description: "Kidneys fully developed" },
    36: { size: "Romaine lettuce", length: "47.4cm", description: "Liver storing iron" },
    37: { size: "Swiss chard", length: "48.6cm", description: "Considered full-term" },
    38: { size: "Leek", length: "49.8cm", description: "Shedding protective coating" },
    39: { size: "Mini watermelon", length: "50.7cm", description: "Ready for birth" },
    40: { size: "Small pumpkin", length: "51.2cm", description: "Due date!" }
  };
  
  // Baby messages by trimester (same as before)
  const babyMessages: string[] = [
    "Hi Mommy! I'm growing so fast, my heart just started beating! 💖",
    "Mommy, I'm the size of a grape now! My little fingers are forming! 👶",
    "I love listening to your heartbeat, it's so comforting! 💓",
    "Mommy, I'm working hard on growing my brain! 🧠",
    "I can hear your voice now, Mommy! Keep talking to me! 🎵",
    "Guess what? I can taste what you eat! That was yummy! 😋",
    "I'm practicing my kicks! Can you feel me moving around? 👣",
    "Mommy, I love when you play music, it makes me dance! 🎶",
    "I'm growing hair and eyebrows now! I wonder who I'll look like! 👶",
    "I'm getting ready to meet you, Mommy! Not much longer now! 🤗",
    "I'm practicing breathing! My lungs are getting stronger! 💪",
    "Mommy, I dream about you! I can't wait to see your face! 😴",
    "I'm running out of room in here! Time to come out soon! 🏠",
    "Thank you for taking such good care of me, Mommy! I love you! 💕"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate pregnancy weeks (same as before)
  useEffect(() => {
    if (pregnancyDate) {
      const dueDate = new Date(pregnancyDate);
      const today = new Date();
      const pregnancyStart = new Date(dueDate);
      pregnancyStart.setDate(dueDate.getDate() - 280);
      
      const timeDiff = today.getTime() - pregnancyStart.getTime();
      const weeks = Math.floor(timeDiff / (1000 * 3600 * 24 * 7));
      setWeeksPregnant(Math.max(0, Math.min(40, weeks)));
    }
  }, [pregnancyDate]);

  // Show random baby message every 30 seconds when connected
  useEffect(() => {
    let messageInterval: NodeJS.Timeout;
    
    if (isConnected) {
      messageInterval = setInterval(() => {
        const randomMessage = babyMessages[Math.floor(Math.random() * babyMessages.length)];
        setBabyMessage(randomMessage);
        setShowBabyMessage(true);
        
        // Check notification permission before creating notification
        if (Notification.permission === 'granted') {
          new Notification('Message from your Baby 👶', {
            body: randomMessage,
            icon: '/favicon.ico',
            tag: 'baby-message'
          });
        }
        
        // Hide message after 15 seconds
        setTimeout(() => setShowBabyMessage(false), 15000);
      }, 30000);
    }
    
    return () => {
      if (messageInterval) {
        clearInterval(messageInterval);
      }
    };
  }, [isConnected, babyMessages]);

  // Medicine reminder system
  useEffect(() => {
    let reminderInterval: NodeJS.Timeout;
    
    const checkMedicineReminders = () => {
      const now = new Date();
      const currentTime = now.getHours().toString().padStart(2, '0') + ':' + 
                         now.getMinutes().toString().padStart(2, '0');
      
      medicines.forEach(medicine => {
        if (medicine.time === currentTime && medicine.enabled) {
          // Create notification
          if (Notification.permission === 'granted') {
            new Notification('Medicine Reminder 💊', {
              body: `Time to take your ${medicine.name}`,
              icon: '/favicon.ico',
              tag: 'medicine-reminder'
            });
          }
          
          // Add alert to state
          setAlerts(prev => [{
            type: 'medicine',
            level: 'info',
            message: `Medicine Reminder: Time to take ${medicine.name}`,
            timestamp: new Date().toLocaleTimeString()
          }, ...prev.slice(0, 4)]);
          
          setShowAlert(true);
        }
      });
    };
    
    // Check immediately and then every minute
    checkMedicineReminders();
    reminderInterval = setInterval(checkMedicineReminders, 60000);
    
    return () => {
      if (reminderInterval) {
        clearInterval(reminderInterval);
      }
    };
  }, [medicines]);

  // Emergency notification function
  const sendEmergencyAlert = (alertType: string, message: string) => {
    if (emergencyContacts.length > 0) {
      setShowEmergencyAlert(true);
      
      // Browser notification for emergency
      if (Notification.permission === 'granted') {
        new Notification('🚨 EMERGENCY ALERT - EcoBump', {
          body: `${message}\n\nNotifying your emergency contacts...`,
          icon: '/favicon.ico',
          tag: 'emergency-alert',
          requireInteraction: true
        });
      }
      
      // In a real app, this would send SMS/calls to emergency contacts
      console.log('Emergency Alert:', message);
      console.log('Notifying contacts:', emergencyContacts);
      
      // Show emergency alert for 30 seconds
      setTimeout(() => setShowEmergencyAlert(false), 30000);
    }
  };

  // Check for dangerous heart rate levels and trigger alerts
  const checkHeartRateAlerts = (maternalHR: number, fetalHR: number) => {
    const newAlerts: Alert[] = [];
    
    // Maternal heart rate alerts: <60 or >100
    if (maternalHR < 60) {
      const message = `MATERNAL ALERT: Heart rate too low (${maternalHR} BPM). Normal range: 60-100 BPM`;
      newAlerts.push({
        type: 'maternal',
        level: 'critical',
        message: message,
        timestamp: new Date().toLocaleTimeString()
      });
      // Send emergency alert for critical maternal issues
      sendEmergencyAlert('maternal', `CRITICAL: Maternal heart rate dangerously low at ${maternalHR} BPM`);
    } else if (maternalHR > 100) {
      const message = `MATERNAL ALERT: Heart rate too high (${maternalHR} BPM). Normal range: 60-100 BPM`;
      newAlerts.push({
        type: 'maternal',
        level: 'critical',
        message: message,
        timestamp: new Date().toLocaleTimeString()
      });
      // Send emergency alert for critical maternal issues
      sendEmergencyAlert('maternal', `CRITICAL: Maternal heart rate dangerously high at ${maternalHR} BPM`);
    }
    
    // Fetal heart rate alerts: <110 or >160
    if (fetalHR < 110) {
      const message = `FETAL ALERT: Heart rate too low (${fetalHR} BPM). Normal range: 110-160 BPM`;
      newAlerts.push({
        type: 'fetal',
        level: 'critical',
        message: message,
        timestamp: new Date().toLocaleTimeString()
      });
      // Send emergency alert for critical fetal issues
      sendEmergencyAlert('fetal', `CRITICAL: Fetal heart rate dangerously low at ${fetalHR} BPM`);
    } else if (fetalHR > 160) {
      const message = `FETAL ALERT: Heart rate too high (${fetalHR} BPM). Normal range: 110-160 BPM`;
      newAlerts.push({
        type: 'fetal',
        level: 'critical',
        message: message,
        timestamp: new Date().toLocaleTimeString()
      });
      // Send emergency alert for critical fetal issues
      sendEmergencyAlert('fetal', `CRITICAL: Fetal heart rate dangerously high at ${fetalHR} BPM`);
    }
    
    if (newAlerts.length > 0) {
      setAlerts(prev => [...newAlerts, ...prev.slice(0, 4)]);
      setShowAlert(true);
      
      if (Notification.permission === 'granted') {
        newAlerts.forEach(alert => {
          new Notification('EcoBump Health Alert', {
            body: alert.message,
            icon: '/favicon.ico',
            tag: alert.type
          });
        });
      }
      
      setTimeout(() => setShowAlert(false), 10000);
    }
  };

  // Request notification permission on component mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Add medicine function
  const addMedicine = (medicineData: { name: FormDataEntryValue | null; time: FormDataEntryValue | null; dosage: FormDataEntryValue | null; frequency: FormDataEntryValue | null; }) => {
    const newMedicine: Medicine = {
      id: Date.now(),
      name: medicineData.name as string,
      time: medicineData.time as string,
      dosage: medicineData.dosage as string,
      frequency: medicineData.frequency as string,
      enabled: true
    };
    setMedicines(prev => [...prev, newMedicine]);
    setShowMedicineForm(false);
  };

  // Add emergency contact function
  const addEmergencyContact = (contactData: { name: FormDataEntryValue | null; phone: FormDataEntryValue | null; relationship: FormDataEntryValue | null; priority: FormDataEntryValue | null; }) => {
    const newContact: EmergencyContact = {
      id: Date.now(),
      name: contactData.name as string,
      phone: contactData.phone as string,
      relationship: contactData.relationship as string,
      priority: contactData.priority as string
    };
    setEmergencyContacts(prev => [...prev, newContact]);
    setShowEmergencyForm(false);
  };

  // Updated functions to match your ESP32 hardware exactly
  const generateFetalHeartRate = () => {
    return Math.floor(Math.random() * (160 - 135 + 1)) + 135;
  };

  const generateMaternalHeartRate = () => {
    return Math.floor(Math.random() * (110 - 75 + 1)) + 75;
  };

  const generateFetalMovement = () => {
    const accZ = (Math.random() * 100 - 50) / 100.0;
    const movement = Math.round(Math.abs(accZ * 30) + 5);
    return Math.min(movement, 20);
  };

  const handleConnect = async () => {
    setIsConnecting(true);
    setConnectionStatus('Connecting...');
    
    setTimeout(() => {
      setIsConnected(true);
      setIsConnecting(false);
      setConnectionStatus('Connected');
      
      const newFetalHR = generateFetalHeartRate();
      const newMaternalHR = generateMaternalHeartRate();
      const newMovement = generateFetalMovement();
      
      setFetalHeartRate(newFetalHR);
      setMaternalHeartRate(newMaternalHR);
      setFetalMovement(newMovement);
      
      checkHeartRateAlerts(newMaternalHR, newFetalHR);
    }, 3000);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setConnectionStatus('Disconnected');
    setFetalHeartRate(0);
    setMaternalHeartRate(0);
    setFetalMovement(0);
    setAlerts([]);
    setShowAlert(false);
    setShowBabyMessage(false);
    setShowEmergencyAlert(false);
  };

  const refreshData = () => {
    if (isConnected) {
      const newFetalHR = generateFetalHeartRate();
      const newMaternalHR = generateMaternalHeartRate();
      const newMovement = generateFetalMovement();
      
      setFetalHeartRate(newFetalHR);
      setMaternalHeartRate(newMaternalHR);
      setFetalMovement(newMovement);
      
      checkHeartRateAlerts(newMaternalHR, newFetalHR);
    }
  };

  const currentBabySize = babySizeData[weeksPregnant] || babySizeData[4];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Emergency Alert Notification */}
      {showEmergencyAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-red-600 text-white p-8 rounded-2xl max-w-md mx-4 shadow-2xl animate-pulse">
            <div className="text-center">
              <div className="text-6xl mb-4">🚨</div>
              <h2 className="text-2xl font-bold mb-4">EMERGENCY ALERT</h2>
              <p className="text-lg mb-6">
                Critical health alert detected!<br/>
                Your emergency contacts have been notified.
              </p>
              <div className="space-y-2 mb-6">
                {emergencyContacts.slice(0, 2).map((contact, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2">
                    <div className="text-2xl">📱</div>
                    <span>{contact.name}: {contact.phone}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowEmergencyAlert(false)}
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100"
              >
                Acknowledge Alert
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Baby Message Notification */}
      {showBabyMessage && (
        <div className="fixed top-24 left-4 z-50 w-80 max-w-sm">
          <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white p-4 rounded-lg shadow-lg animate-bounce">
            <div className="flex items-start">
              <div className="text-2xl mr-3">👶</div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">Message from your Baby</h4>
                <p className="text-sm">{babyMessage}</p>
              </div>
              <button 
                onClick={() => setShowBabyMessage(false)}
                className="text-white hover:text-gray-200 ml-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert Notification */}
      {showAlert && alerts.length > 0 && (
        <div className="fixed top-24 right-4 z-50 w-96 max-w-sm">
          {alerts.slice(0, 2).map((alert, index) => (
            <div key={index} className={`mb-4 p-4 rounded-lg shadow-lg ${
              alert.type === 'medicine' ? 'bg-blue-600' : 'bg-red-600'
            } text-white ${alert.type === 'medicine' ? '' : 'animate-pulse'}`}>
              <div className="flex items-start">
                <div className="text-2xl mr-3">
                  {alert.type === 'medicine' ? '💊' : '⚠️'}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">
                    {alert.type === 'medicine' ? 'MEDICINE REMINDER' : 'HEALTH ALERT'}
                  </h4>
                  <p className="text-sm">{alert.message}</p>
                  <p className="text-xs mt-1 opacity-80">Time: {alert.timestamp}</p>
                </div>
                <button 
                  onClick={() => setShowAlert(false)}
                  className="text-white hover:text-gray-200 ml-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Medicine Form Modal */}
      {showMedicineForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-6">Add Medicine Reminder</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              addMedicine({
                name: formData.get('name'),
                time: formData.get('time'),
                dosage: formData.get('dosage'),
                frequency: formData.get('frequency')
              });
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="Prenatal Vitamins"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    name="time"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dosage</label>
                  <input
                    type="text"
                    name="dosage"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="1 tablet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                  <select
                    name="frequency"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="daily">Daily</option>
                    <option value="twice">Twice daily</option>
                    <option value="thrice">Three times daily</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
                >
                  Add Reminder
                </button>
                <button
                  type="button"
                  onClick={() => setShowMedicineForm(false)}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Emergency Contact Form Modal */}
      {showEmergencyForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <div className="text-2xl mr-2">🚨</div>
              Add Emergency Contact
            </h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              addEmergencyContact({
                name: formData.get('name'),
                phone: formData.get('phone'),
                relationship: formData.get('relationship'),
                priority: formData.get('priority')
              });
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="Dr. Sarah Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
                  <select
                    name="relationship"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  >
                    <option value="doctor">Doctor/Healthcare Provider</option>
                    <option value="partner">Partner/Spouse</option>
                    <option value="family">Family Member</option>
                    <option value="friend">Friend</option>
                    <option value="emergency">Emergency Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    name="priority"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  >
                    <option value="1">Primary (Call First)</option>
                    <option value="2">Secondary</option>
                    <option value="3">Backup</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                >
                  Add Contact
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmergencyForm(false)}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navbar */}
      
      {/* Navbar */}
     <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
       scrolled 
         ? "py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
         : "py-4 bg-[#0F172A]/80 backdrop-blur-sm"
     }`}>
       <div className="max-w-7xl mx-auto">
         <div className="relative pt-4 px-4 sm:px-6 lg:px-8">
           <nav className="relative flex items-center justify-between" aria-label="Global">
             <div className="flex items-center flex-grow-0">
               <Link href="/" className="group flex items-center">
                 <span className="sr-only">EcoBump</span>
                 <div className="mr-2 h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg transform transition duration-300 group-hover:scale-110 shadow-md">E</div>
                 <span className={`text-xl font-bold ${scrolled ? 'text-[#1E3A8A]' : 'text-white'} transition-colors duration-300`}>EcoBump</span>
               </Link>
             </div>
             
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
               <div className="flex space-x-8">
                 <Link href="/monitor/connect/" className={`font-medium ${scrolled ? 'text-pink-600 hover:text-[#1E3A8A]' : 'text-pink-300 hover:text-white'} transition-colors duration-300 relative group`}>
                   Heart Monitor
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-pink-600' : 'bg-pink-300'} transition-all duration-300`}></span>
                </Link>
                <Link href="/pregnancy" className={`font-medium ${scrolled ? 'text-gray-600 hover:text-[#1E3A8A]' : 'text-white hover:text-pink-300'} transition-colors duration-300 relative group`}>
                  Pregnancy Care
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? 'bg-[#1E3A8A]' : 'bg-pink-300'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-5">
              <Link href="/login" className={`hidden md:block font-medium ${scrolled ? 'text-gray-600 hover:text-[#1E3A8A]' : 'text-white hover:text-pink-300'} transition-colors duration-300`}>
                Login
              </Link>
              <Link href="/register" className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#1E3A8A] hover:bg-[#152a65] transition-colors duration-300 shadow-sm hover:shadow-md">
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
            Real-time Heart Monitor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor maternal and fetal heart rates continuously with our advanced wireless EcoBump device
          </p>
        </div>

        {/* Pregnancy Setup Section */}
        {!pregnancyDate && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center">
                <div className="text-2xl mr-2">🤰</div>
                Setup Your Pregnancy Journey
              </h3>
              <p className="text-purple-700 mb-4">
                Enter your due date to track your baby's growth and receive personalized messages!
              </p>
              <div className="flex space-x-3">
                <input
                  type="date"
                  value={pregnancyDate}
                  onChange={(e) => setPregnancyDate(e.target.value)}
                  className="flex-1 px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Due Date"
                />
                <button
                  onClick={() => {/* Date is automatically saved */}}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Baby Growth Tracker */}
        {pregnancyDate && weeksPregnant > 0 && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-800 mb-2">Your Baby This Week</h3>
                <div className="flex items-center justify-center space-x-6 mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🍊</div>
                    <p className="text-sm text-orange-700">Week {weeksPregnant}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-orange-600">{currentBabySize.size}</div>
                    <p className="text-orange-700 font-medium">Size: {currentBabySize.length}</p>
                  </div>
                </div>
                <p className="text-orange-800 text-lg font-medium mb-2">
                  Your baby is the size of a <span className="font-bold">{currentBabySize.size.toLowerCase()}</span>!
                </p>
                <p className="text-orange-700">
                  {currentBabySize.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Medicine & Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Medicine Reminders */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <div className="text-2xl mr-2">💊</div>
                Medicine Reminders
              </h3>
              <button
                onClick={() => setShowMedicineForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                + Add
              </button>
            </div>
            
            {medicines.length === 0 ? (
              <p className="text-gray-600 text-center py-4">
                No medicine reminders set. Add one to get started!
              </p>
            ) : (
              <div className="space-y-3">
                {medicines.map((medicine) => (
                  <div key={medicine.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{medicine.name}</p>
                      <p className="text-sm text-gray-600">{medicine.time} - {medicine.dosage}</p>
                    </div>
                    <button
                      onClick={() => setMedicines(prev => prev.filter(m => m.id !== medicine.id))}
                      className="text-red-600 hover:text-red-800"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <div className="text-2xl mr-2">🚨</div>
                Emergency Contacts
              </h3>
              <button
                onClick={() => setShowEmergencyForm(true)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                + Add
              </button>
            </div>
            
            {emergencyContacts.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-gray-600 mb-3">
                  No emergency contacts set.
                </p>
                <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                  <p className="text-xs text-red-700">
                    <strong>Important:</strong> Add emergency contacts to receive automatic alerts during critical situations.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {emergencyContacts
                  .sort((a, b) => parseInt(a.priority) - parseInt(b.priority))
                  .map((contact) => (
                  <div key={contact.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <p className="font-medium text-gray-900 flex items-center">
                        {contact.priority === "1" && <span className="text-red-600 mr-1">⭐</span>}
                        {contact.name}
                      </p>
                      <p className="text-sm text-gray-600">{contact.phone}</p>
                      <p className="text-xs text-gray-500 capitalize">{contact.relationship}</p>
                    </div>
                    <button
                      onClick={() => setEmergencyContacts(prev => prev.filter(c => c.id !== contact.id))}
                      className="text-red-600 hover:text-red-800"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Baby Messages History */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="text-2xl mr-2">👶</div>
              Messages from Baby
            </h3>
            
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {babyMessage ? (
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="text-pink-800">{babyMessage}</p>
                  <p className="text-xs text-pink-600 mt-1">Just now</p>
                </div>
              ) : (
                <p className="text-gray-600 text-center py-4">
                  Connect your device to start receiving messages from your baby! 💕
                </p>
              )}
              
              <div className="p-3 bg-pink-50 rounded-lg opacity-70">
                <p className="text-pink-800">Hi Mommy! I love listening to your heartbeat! 💖</p>
                <p className="text-xs text-pink-600 mt-1">5 minutes ago</p>
              </div>
              <div className="p-3 bg-pink-50 rounded-lg opacity-50">
                <p className="text-pink-800">I'm growing so fast! Can you feel me moving? 👶</p>
                <p className="text-xs text-pink-600 mt-1">10 minutes ago</p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-700">
                💡 <strong>Tip:</strong> Your baby sends you loving messages every 30 seconds when monitoring is active!
              </p>
            </div>
          </div>
        </div>

        {/* Alert History Section */}
        {isConnected && alerts.length > 0 && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Recent Health Alerts
              </h3>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {alerts.slice(0, 3).map((alert, index) => (
                  <div key={index} className="text-sm text-red-700 bg-red-100 p-2 rounded">
                    <span className="font-medium">{alert.timestamp}:</span> {alert.message}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Connection Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="text-center">
              <div className="mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                  isConnected 
                    ? 'bg-green-100 text-green-600' 
                    : isConnecting 
                      ? 'bg-yellow-100 text-yellow-600 animate-pulse' 
                      : 'bg-gray-100 text-gray-400'
                }`}>
                  {isConnected ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.288 15.038a5.25 5.25 0 717.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                  ) : isConnecting ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  EcoBump Device
                </h3>
                
                <p className={`text-lg font-medium mb-6 ${
                  isConnected 
                    ? 'text-green-600' 
                    : isConnecting 
                      ? 'text-yellow-600' 
                      : 'text-gray-500'
                }`}>
                  Status: {connectionStatus}
                </p>
              </div>

              {!isConnected && !isConnecting && (
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Before connecting:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Ensure your EcoBump device is powered on</li>
                      <li>• Enable Bluetooth on your device</li>
                      <li>• Position the sensor comfortably on your abdomen</li>
                    </ul>
                  </div>
                  
                  <button
                    onClick={handleConnect}
                    disabled={isConnecting}
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Connect to EcoBump Device
                  </button>
                </div>
              )}

              {isConnecting && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <p className="text-yellow-600 font-medium">Establishing connection...</p>
                </div>
              )}

              {isConnected && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Successfully connected</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={refreshData}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Refresh Data
                    </button>
                    <button
                      onClick={handleDisconnect}
                      className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Disconnect
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Monitoring Cards */}
        {isConnected && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Fetal Heart Rate Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-lg font-semibold">Fetal Heart Rate</h3>
                    <p className="text-pink-100 text-sm">Baby's heartbeat</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {fetalHeartRate}
                    <span className="text-lg font-normal text-gray-500 ml-1">BPM</span>
                  </div>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    fetalHeartRate >= 110 && fetalHeartRate <= 160 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      fetalHeartRate >= 110 && fetalHeartRate <= 160 
                        ? 'bg-green-500' 
                        : 'bg-red-500 animate-pulse'
                    }`}></div>
                    {fetalHeartRate >= 110 && fetalHeartRate <= 160 ? 'Normal Range' : 'ALERT - Abnormal'}
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    Normal range: 110-160 BPM
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-center space-x-1 h-8">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-pink-400 rounded-full"
                        style={{
                          height: `${15 + (i % 3) * 5}px`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Maternal Heart Rate Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-lg font-semibold">Maternal Heart Rate</h3>
                    <p className="text-blue-100 text-sm">Mother's heartbeat</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {maternalHeartRate}
                    <span className="text-lg font-normal text-gray-500 ml-1">BPM</span>
                  </div>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    maternalHeartRate >= 60 && maternalHeartRate <= 100 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      maternalHeartRate >= 60 && maternalHeartRate <= 100 
                        ? 'bg-green-500' 
                        : 'bg-red-500 animate-pulse'
                    }`}></div>
                    {maternalHeartRate >= 60 && maternalHeartRate <= 100 ? 'Normal Range' : 'ALERT - Abnormal'}
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    Normal range: 60-100 BPM
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-center space-x-1 h-8">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-blue-400 rounded-full"
                        style={{
                          height: `${12 + (i % 2) * 4}px`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fetal Movement Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-lg font-semibold">Fetal Movement</h3>
                    <p className="text-purple-100 text-sm">Baby's activity</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                   
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {fetalMovement}
                    <span className="text-lg font-normal text-gray-500 ml-1">/hr</span>
                  </div>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    fetalMovement >= 10 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      fetalMovement >= 10 
                        ? 'bg-green-500' 
                        : 'bg-yellow-500'
                    }`}></div>
                    {fetalMovement >= 10 ? 'Active Baby' : 'Low Activity'}
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    Expected: 10+ movements/hour
                  </div>
                </div>
                
               <div className="mt-6">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-purple-200 rounded-full"></div>
                      <div 
                        className="absolute inset-0 border-4 border-purple-500 rounded-full transition-all duration-500"
                        style={{
                          clipPath: `inset(0 ${100 - Math.min(fetalMovement * 5, 100)}% 0 0)`
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-purple-600">
                          {Math.min(Math.round(fetalMovement * 5), 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Info Section */}
        {isConnected && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Monitoring Session</h3>
              <p className="text-gray-600">Device connected and ready for monitoring</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Device Status</h4>
                <p className="text-sm text-gray-600">Connected & Active</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Data Quality</h4>
                <p className="text-sm text-gray-600">Excellent Signal</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-2xl">💊</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Medicine Alerts</h4>
                <p className="text-sm text-gray-600">{medicines.length} Reminders Set</p>
              </div>

              {/* Emergency Contacts Status */}
              <div className="p-4 bg-red-50 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-2xl">🚨</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Emergency Contacts</h4>
                <p className="text-sm text-gray-600">
                  {emergencyContacts.length > 0 
                    ? `${emergencyContacts.length} Contacts Ready` 
                    : 'None Set'
                  }
                </p>
              </div>
              
              <div className="p-4 bg-pink-50 rounded-xl">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-2xl">👶</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Baby Messages</h4>
                <p className="text-sm text-gray-600">Active & Loving</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Important Reminder</h4>
                  <p className="text-sm text-yellow-700">
                    This monitoring device provides supplementary information. Always consult your healthcare provider for medical decisions and if you notice any concerning patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Emergency Contact Information */}
            <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Emergency Protocol</h4>
                  <p className="text-sm text-red-700 mb-2">
                    If you receive critical alerts or experience concerning symptoms, contact your healthcare provider immediately or call emergency services.
                  </p>
                  {emergencyContacts.length > 0 && (
                    <div className="text-sm text-red-700">
                      <p className="font-medium mb-1">Your Emergency Contacts:</p>
                      <div className="space-y-1">
                        {emergencyContacts
                          .sort((a, b) => parseInt(a.priority) - parseInt(b.priority))
                          .slice(0, 2)
                          .map((contact, index) => (
                          <p key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            {contact.name}: {contact.phone}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </main>
);
}
