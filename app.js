// Phone Security Checklist - Data & App Logic

const checklistData = [
  // === EVERYDAY ESSENTIALS ===
  {
    category: 'everyday',
    id: 'lock-screen',
    difficulty: 'easy',
    label: 'Set a strong screen lock (PIN 6+ digits, not a pattern)',
    hint: 'Patterns are visible from fingerprints on the screen. Use a numeric PIN of at least 6 digits. Avoid Face ID for high-threat situations, as it can be bypassed by pointing your phone at you.'
  },
  {
    category: 'everyday',
    id: 'biometric-pin',
    difficulty: 'easy',
    label: 'Set a separate SIM PIN',
    hint: 'Without a SIM PIN, someone who steals your SIM card can receive your SMS 2FA codes and reset your passwords. Set it in your phone\'s security settings under SIM lock.'
  },
  {
    category: 'everyday',
    id: 'usb-debugging',
    difficulty: 'easy',
    label: 'Disable USB debugging (Android) or restrict USB accessories (iOS)',
    hint: 'USB debugging allows a connected computer to install apps and read data. Keep it off unless actively developing. On iOS, go to Settings > Face ID & Passcode > USB Accessories and set to "Don\'t Allow".'
  },
  {
    category: 'everyday',
    id: 'update-os',
    difficulty: 'easy',
    label: 'Install the latest OS and security updates',
    hint: 'Most phone hacks exploit known vulnerabilities that already have patches. Check monthly. If your phone stops getting updates, it\'s time for a new one.'
  },
  {
    category: 'everyday',
    id: 'auto-lock',
    difficulty: 'easy',
    label: 'Set auto-lock to 30 seconds or less',
    hint: 'A short auto-lock means a stolen or unattended phone locks before anyone can snoop. Settings > Display > Auto-lock.'
  },
  {
    category: 'everyday',
    id: 'find-my',
    difficulty: 'easy',
    label: 'Enable "Find My Phone" and remote wipe',
    hint: 'If your phone is lost or stolen, you can track it and remotely erase all data. iOS: Find My. Android: Find My Device. Only works if set up before the phone goes missing.'
  },
  {
    category: 'everyday',
    id: '2fa-app',
    difficulty: 'easy',
    label: 'Switch from SMS 2FA to an authenticator app',
    hint: 'SMS 2FA can be intercepted via SIM swap attacks. Use an authenticator app like Aegis (Android), Tofu (iOS), or hardware keys like YubiKey. Never use SMS for high-value accounts (email, banking, crypto).'
  },
  {
    category: 'everyday',
    id: 'encrypt-backup',
    difficulty: 'easy',
    label: 'Encrypt your phone backups',
    hint: 'An unencrypted backup on your computer is a copy of every message, photo, and password on your phone. iTunes/Finder backups: check "Encrypt local backup". Android: backups are encrypted by default on modern versions.'
  },
  {
    category: 'everyday',
    id: 'fingerprint-clean',
    difficulty: 'easy',
    label: 'Clean your screen to remove unlock pattern traces',
    hint: 'If you use a pattern unlock, the oil from your finger leaves a visible trail on the screen. Wipe your screen regularly, or better yet, switch to a PIN.'
  },
  {
    category: 'everyday',
    id: 'strong-password',
    difficulty: 'easy',
    label: 'Use a strong unique password + password manager',
    hint: 'A password manager (Bitwarden, KeePassXC) generates and stores unique 20+ character passwords for every account. Reusing passwords means one breach compromises everything. Protect it with a strong master passphrase.'
  },
  {
    category: 'everyday',
    id: 'voice-assistant-off',
    difficulty: 'easy',
    label: 'Disable voice assistants (Siri, Google Assistant, Bixby)',
    hint: 'Voice assistants constantly listen for trigger words and send audio to the cloud. Turn them off in Settings > Siri & Search (iOS) or Settings > Google > Assistant (Android). This reduces always-on microphone surveillance.'
  },
  {
    category: 'everyday',
    id: 'biometrics-off',
    difficulty: 'medium',
    label: 'Turn off biometric unlock (fingerprint, Face ID)',
    hint: 'Biometrics can be compelled by force (pressing your finger, pointing the phone at your face). Use a PIN instead. iOS: Settings > Face ID & Passcode. Android: Settings > Security > Biometrics. Keep a duress option in mind for worst cases.'
  },
  {
    category: 'everyday',
    id: 'black-backgrounds',
    difficulty: 'easy',
    label: 'Use a black or plain background',
    hint: 'A bright or detailed wallpaper can reflect in your eyes and be read by surveillance cameras. Use a plain black background on your lock screen and home screen. Also prevents shoulder surfers from seeing notifications against busy imagery.'
  },
  // === OFF-GRID/SURVIVAL ===
  {
    category: 'off-grid',
    id: 'burner-phone',
    difficulty: 'medium',
    label: 'GET A BURNER',
    hint: 'Use a cheap disposable phone for sensitive situations. Destroy or discard completely when done. This prevents tracking and protects your main device.'
  },
  {
    category: 'off-grid',
    id: 'disable-phone',
    difficulty: 'easy',
    label: 'TURN IT OFF',
    hint: 'Power off your phone completely when not in use. This prevents remote access, tracking, and location leaks. Leave it off for hours or days when in high-risk situations.'
  },
  {
    category: 'off-grid',
    id: 'faraday-bag',
    difficulty: 'hard',
    label: 'FARADAY BAG',
    hint: 'Store your phone in a Faraday bag or signal-blocking pouch to completely block all wireless communications. This protects against remote hacking, tracking, and drone surveillance.'
  },
  {
    category: 'off-grid',
    id: 'duress-pin',
    difficulty: 'hard',
    label: 'SET UP A DURESS PIN',
    hint: 'Create a secondary PIN/social security number you can forcibly provide under coercion. Keep it separate from your real PIN. This protects your loved ones while sacrificing your own privacy.'
  },
  {
    category: 'off-grid',
    id: 'carry-on-you',
    difficulty: 'easy',
    label: 'CARRY IT ON YOU',
    hint: 'Always keep your phone physically close. In a pocket, holster, or deep in a bag. Never leave it unattended in cars, cafes, or public places where it can be accessed by strangers.'
  },
  {
    category: 'off-grid',
    id: 'reboot-device',
    difficulty: 'easy',
    label: 'REBOOT DEVICE',
    hint: 'Restart your phone regularly (daily/weekly). This kills active exploits, clears volatile memory, and prevents persistent malware or spyware from remaining active.'
  },

  // === LOCATION ===
  {
    category: 'location',
    id: 'revoke-location-apps',
    difficulty: 'easy',
    label: 'Revoke location permission from apps that do not need it',
    hint: 'Go to Settings > Privacy > Location Services (iOS) or Settings > Location (Android). Most apps do not need your location. Revoke it from social media, shopping, news, games, and weather apps.'
  },
  {
    category: 'location',
    id: 'location-while-using',
    difficulty: 'easy',
    label: 'Set location access to "While Using" or "One Time" only',
    hint: 'Never grant "Always" location access. Only maps should get "While Using". Everything else should be "Never" or "One Time". On Android: Settings > Location > App permissions.'
  },
  {
    category: 'location',
    id: 'coarse-location',
    difficulty: 'easy',
    label: 'Give apps coarse location, not precise location',
    hint: 'iOS lets you choose between "Precise" and "Approximate" location per app. Only maps need precise. Weather, local news, and delivery apps work fine with approximate (city-level) location.'
  },
  {
    category: 'location',
    id: 'google-location-history',
    difficulty: 'easy',
    label: 'Turn off Google Location History and Timeline',
    hint: 'Google stores everywhere you have ever been. Go to myactivity.google.com > Location History > Turn off. Also delete past data. Android: Settings > Google > Location > Location History.'
  },
  {
    category: 'location',
    id: 'apple-location-services',
    difficulty: 'easy',
    label: 'Review Apple\'s location and analytics settings',
    hint: 'Settings > Privacy & Security > Location Services > System Services. Turn off "iPhone Analytics", "Popular Near Me", and "Routing & Traffic". Keep "Find My" and "Emergency SOS" on.'
  },
  {
    category: 'location',
    id: 'offline-maps',
    difficulty: 'medium',
    label: 'Use offline maps instead of online navigation',
    hint: 'Apps like Organic Maps and OSMAnd let you download map regions and navigate using GPS only. No data leaves your device. Your travel history stays private. Available on Android and iOS.'
  },
  {
    category: 'location',
    id: 'wifi-scanning-off',
    difficulty: 'easy',
    label: 'Disable WiFi and Bluetooth scanning',
    hint: 'Even with WiFi and Bluetooth off, Android scans nearby networks to "improve location". Go to Settings > Location > WiFi and Bluetooth scanning. Turn both off. On GrapheneOS, this truly disables scanning.'
  },
  {
    category: 'location',
    id: 'photo-location-off',
    difficulty: 'easy',
    label: 'Strip GPS metadata from photos before sharing',
    hint: 'Photos taken with location enabled embed exact GPS coordinates in EXIF data. When you share them, you share your location. Disable location for the camera app, or use an app like "Scrambled Exif" to strip metadata before sharing.'
  },
  {
    category: 'location',
    id: 'ad-tracking-id',
    difficulty: 'easy',
    label: 'Reset or limit your advertising ID',
    hint: 'Android: Settings > Privacy > Ads > Reset advertising ID (or "Delete advertising ID" on Android 12+). iOS: Settings > Privacy & Security > Tracking > Turn off "Allow Apps to Request to Track".'
  },
  {
    category: 'location',
    id: 'cell-tower-aware',
    difficulty: 'medium',
    label: 'Understand that cell tower triangulation cannot be disabled',
    hint: 'Your carrier always knows which cell towers your phone connects to. This cannot be turned off while connected to a cellular network. The only fix: airplane mode or removing the SIM. Use a VPN to protect your internet traffic, but know the carrier still sees tower location.'
  },

  // === NETWORK & DATA ===
  {
    category: 'network',
    id: 'vpn',
    difficulty: 'medium',
    label: 'Use a trustworthy multihop VPN on your phone',
    hint: 'A VPN hides your IP address from apps, websites, and network operators. Use a multihop VPN with traffic obfuscation. Good options: Mullvad, NymVPN, ProtonVPN, IVPN. Never use a free VPN: they sell your data.'
  },
  {
    category: 'network',
    id: 'mac-randomization',
    difficulty: 'easy',
    label: 'Enable MAC address randomization',
    hint: 'Your WiFi MAC address is a unique hardware identifier that can track you across networks. Android: Settings > WiFi > WiFi Preferences > MAC Randomization (use "Use randomized MAC"). iOS does this automatically, but verify in WiFi > network name > Private WiFi Address.'
  },
  {
    category: 'network',
    id: 'tor',
    difficulty: 'hard',
    label: 'Use Tor for maximum anonymity (when needed)',
    hint: 'Tor routes your traffic through multiple anonymous relays, making you very hard to track. Slower than a VPN but offers stronger anonymity. Use Orbot (Android) or Onion Browser (iOS) for on-device Tor.'
  },
  {
    category: 'network',
    id: 'https-only',
    difficulty: 'easy',
    label: 'Enable HTTPS-only mode in your browser',
    hint: 'Firefox: Settings > Privacy & Security > HTTPS-Only Mode (enable in all tabs). Chrome: chrome://flags > "HTTPS-First Mode". This blocks insecure HTTP connections that leak your data.'
  },
  {
    category: 'network',
    id: 'custom-dns',
    difficulty: 'medium',
    label: 'Use a privacy-respecting DNS provider',
    hint: 'Your ISP sees every website you visit via DNS queries. Use a encrypted DNS provider like Quad9 (9.9.9.9), Mullvad DNS, or Cloudflare (1.1.1.1). Android: Settings > Private DNS. iOS: Settings > WiFi > network > Configure DNS.'
  },
  {
    category: 'network',
    id: 'airplane-mode',
    difficulty: 'medium',
    label: 'Use airplane mode with WiFi-only to reduce tracking',
    hint: 'In airplane mode, your cellular radio is off, so no cell tower tracking. Turn on WiFi (with MAC randomization and VPN) to use the internet. This stops carrier tracking entirely during that time.'
  },
  {
    category: 'network',
    id: 'check-public-wifi',
    difficulty: 'medium',
    label: 'Never use public WiFi for sensitive tasks (or always VPN)',
    hint: 'Public WiFi networks can monitor everything you do and inject ads or malware. If you must use public WiFi, always have your VPN enabled first. Better: use your phone\'s cellular hotspot.'
  },
  {
    category: 'network',
    id: 'rmdir',
    difficulty: 'hard',
    label: 'Remove carrier bloatware and carrier tracking apps',
    hint: 'Carrier apps like "My Verizon" or "AT&T" track your location and usage data. Uninstall them or disable them via APM. On Android: use ADB to debloat. On any phone: check for and remove OEM telemetry apps.'
  },

  // === APPS & PERMISSIONS ===
  {
    category: 'apps',
    id: 'audit-permissions',
    difficulty: 'medium',
    label: 'Audit every app\'s permissions at least once a month',
    hint: 'Settings > Privacy > Permission manager (Android) or Settings > Privacy & Security (iOS). Check what each app can access: camera, microphone, contacts, photos, location, files. Revoke anything excessive.'
  },
  {
    category: 'apps',
    id: 'background-apps',
    difficulty: 'easy',
    label: 'Limit background app activity and refresh',
    hint: 'iOS: Settings > General > Background App Refresh. Turn per-app off, especially social media and shopping. Android: Settings > Apps > Special access > Battery optimization. Set social apps to "Restricted" or "Background only when plugged in".'
  },
  {
    category: 'apps',
    id: 'install-from-trusted',
    difficulty: 'easy',
    label: 'Only install apps from official stores (or verified sources)',
    hint: 'Avoid sideloading random APKs. The Play Store and App Store review apps for malware. On Android, keep "Install unknown apps" disabled for all sources except ones you explicitly trust (like F-Droid).'
  },
  {
    category: 'apps',
    id: 'replace-apps',
    difficulty: 'medium',
    label: 'Replace privacy-hostile apps with open-source alternatives',
    hint: 'Google Maps -> Organic Maps. Chrome -> Firefox/Fennec. WhatsApp -> Signal. Gmail -> Proton Mail. Google Photos -> Ente Photos. YouTube -> NewPipe/Grayjay. Each replacement stops one company from profiling you.'
  },
  {
    category: 'apps',
    id: 'notifications-hidden',
    difficulty: 'easy',
    label: 'Hide notification content on your lock screen',
    hint: 'Notifications on your lock screen can reveal 2FA codes, messages from apps, and email previews. iOS: Settings > Notifications > Show Previews > "When Unlocked". Android: Settings > Lock screen > Notifications > "Hide content".'
  },
  {
    category: 'apps',
    id: 'clipboard-access',
    difficulty: 'medium',
    label: 'Be aware of apps reading your clipboard',
    hint: 'Many apps silently read your clipboard every time you switch to them. This can expose passwords and 2FA codes. Android 12+ warns you when an app reads the clipboard. iOS 14+ shows a banner. Pay attention to these warnings.'
  },
  {
    category: 'apps',
    id: 'microphone-camera-led',
    difficulty: 'easy',
    label: 'Watch for camera/microphone indicators and investigate any surprise usage',
    hint: 'iOS shows an orange dot for mic, green for camera. Android shows mic/camera icons in the status bar. If you see these when you did not open the camera or make a call, check which app is accessing them in Control Center / Quick Settings and revoke that permission.'
  },
  {
    category: 'apps',
    id: 'microphone-physical',
    difficulty: 'medium',
    label: 'Check for hidden physical surveillance (audio bugs, chargers)',
    hint: 'Be cautious of USB charging stations. They can install malware via "juice jacking." Carry your own charger or a USB data blocker. Public charging cables could be modified to snoop on your device.'
  },
  {
    category: 'apps',
    id: 'app-locks',
    difficulty: 'medium',
    label: 'Use app lock / biometric lock for sensitive apps',
    hint: 'Banking, messaging, and auth apps should require Face ID / fingerprint to open, even when your phone is unlocked. iOS: Face ID per app in Settings. Android: use the app\'s built-in app lock or an app locker from F-Droid.'
  },

  // === ADVANCED ===
  {
    category: 'advanced',
    id: 'grapheneos',
    difficulty: 'hard',
    label: 'Consider GrapheneOS or a degoogled Android for maximum privacy',
    hint: 'GrapheneOS is a hardened, privacy-focused Android fork for Pixel phones. It removes all Google services, blocks background scanning even when WiFi is on, and gives granular permission control. Not for everyone, but it\'s the gold standard for phone privacy.'
  },
  {
    category: 'advanced',
    id: 'fdroid',
    difficulty: 'medium',
    label: 'Use F-Droid instead of Google Play for open-source apps',
    hint: 'F-Droid is an app store for free and open-source Android apps. Every app is auditable. You get browsers like Mull, maps like Organic Maps, and authenticators like Aegis without Google Play Services tracking you.'
  },
  {
    category: 'advanced',
    id: 'hardware-keys',
    difficulty: 'hard',
    label: 'Use a hardware security key (YubiKey) for critical accounts',
    hint: 'A YubiKey provides physical 2FA: even if someone steals your password and intercepts your SMS, they cannot log in without the physical key. Start with your email and password manager, then banking.'
  },
  {
    category: 'advanced',
    id: 'auto-reboot',
    difficulty: 'medium',
    label: 'Set your phone to restart automatically at night',
    hint: 'Worst-case, law enforcement can sometimes extract keys from a seized phone if it stays unlocked (Traffic Analysis situation). A reboot puts the phone in BFU (Before First Unlock) mode, requiring your PIN to decrypt data. GrapheneOS supports auto-reboot. iOS does not, but you can make it a habit.'
  },
  {
    category: 'advanced',
    id: 'biometric-emergency',
    difficulty: 'medium',
    label: 'Know how to quickly disable biometric unlock',
    hint: 'Biometrics can be compelled (pressed against your finger, pointed at your face). On iOS: press power and volume button together for 5 seconds to require PIN. On Android: set "Lockdown" in power menu settings. Practice this before you need it.'
  },
    {
      category: 'advanced',
      id: 'port-mitigation',
    difficulty: 'hard',
    label: 'Disable 0-carrier exploit ports (e.g. 27000 on Samsung)',
    hint: 'Samsung phones shipped with a debugging port (27000) open on the cellular baseband. Attackers could exploit it remotely. Check if your OEM has patched known baseband bugs. Apply the latest security patches. For maximum protection, use a phone with strong exploit mitigations like GrapheneOS.'
  },
  {
    category: 'advanced',
    id: 'lockdown-mode',
    difficulty: 'medium',
    label: 'Enable Lockdown Mode if you are a high-profile target (iOS) or use Guest Mode (Android)',
    hint: 'iOS Lockdown Mode restricts most wireless and messaging features to block targeted attacks. For most people, this is overkill and makes the phone less convenient. But if you face targeted threats (journalists, politicians), it\'s a real option. Android: use a separate Guest profile for risky situations.'
  },
];

// === RENDER ===

function render() {
  const categories = {
    everyday: { items: [], container: document.getElementById('everyday') },
    location: { items: [], container: document.getElementById('location') },
    network: { items: [], container: document.getElementById('network') },
    apps: { items: [], container: document.getElementById('apps') },
    advanced: { items: [], container: document.getElementById('advanced') },
    'off-grid': { items: [], container: document.getElementById('off-grid') },
    messaging: { items: [], container: document.getElementById('messaging') },
  };

  checklistData.forEach(item => {
    if (categories[item.category]) {
      categories[item.category].items.push(item);
    }
  });

  const saved = loadState();

  Object.keys(categories).forEach(catKey => {
    const cat = categories[catKey];
    if (!cat.container) return;
    cat.container.innerHTML = '';
    cat.items.forEach(item => {
      const el = createItem(item, saved[item.id]);
      cat.container.appendChild(el);
    });
  });

  updateProgress();
}

function createItem(item, isDone) {
  const div = document.createElement('div');
  div.className = 'checklist-item' + (isDone ? ' done' : '');
  div.dataset.id = item.id;
  div.setAttribute('role', 'checkbox');
  div.setAttribute('aria-checked', isDone ? 'true' : 'false');
  div.setAttribute('tabindex', '0');

  const hintHtml = item.hint
    ? `<div class="checklist-hint">${escapeHtml(item.hint)}</div>`
    : '';

  div.innerHTML = `
    <div class="checklist-checkbox">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </div>
    <div class="checklist-content">
      <div class="checklist-label">${escapeHtml(item.label)} <span class="difficulty ${item.difficulty}">${item.difficulty}</span></div>
      ${hintHtml}
    </div>
  `;

  // Click handler (works for both mouse and touch)
  const handleClick = (e) => {
    e.preventDefault();
    toggleItem(div, item);
  };

  div.addEventListener('click', handleClick);

  // Keyboard handler for accessibility
  div.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(div, item);
    }
  });

  return div;
}

function toggleItem(el, item) {
  const saved = loadState();
  const isDone = !saved[item.id];

  el.classList.toggle('done', isDone);
  el.setAttribute('aria-checked', isDone ? 'true' : 'false');

  saved[item.id] = isDone;
  saveState(saved);

  updateProgress();
}

// === PROGRESS ===

function updateProgress() {
  const saved = loadState();
  const total = checklistData.length;
  let done = 0;
  checklistData.forEach(item => {
    if (saved[item.id]) done++;
  });

  const percent = total > 0 ? (done / total) * 100 : 0;
  document.getElementById('progressFill').style.width = percent + '%';
  document.getElementById('progressText').textContent = `${done} of ${total} done`;

  // Check if all done
  if (done === total && total > 0) {
    document.querySelector('.hero h1').classList.add('celebrate');
    setTimeout(() => {
      document.querySelector('.hero h1').classList.remove('celebrate');
    }, 600);
    if (!saved._celebrated) {
      showToast('🎉 All done! Your phone is locked down! What a lucky break!');
      saved._celebrated = true;
      saveState(saved);
    }
  } else if (done < total && saved._celebrated) {
    saved._celebrated = false;
    saveState(saved);
  }
}

// === STORAGE ===

function loadState() {
  try {
    return JSON.parse(localStorage.getItem('phoneSecurityChecklist') || '{}');
  } catch {
    return {};
  }
}

function saveState(state) {
  try {
    localStorage.setItem('phoneSecurityChecklist', JSON.stringify(state));
  } catch {
    // localStorage might be disabled (private browsing)
  }
}

// === RESET ===

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset all checklist items? Your progress will be cleared.')) {
    localStorage.removeItem('phoneSecurityChecklist');
    render();
    showToast('Progress reset. Start fresh!');
  }
});

// === EXPORT / COPY ===

document.getElementById('exportBtn').addEventListener('click', () => {
  const saved = loadState();

  const done = checklistData.filter(item => saved[item.id]);
  const notDone = checklistData.filter(item => !saved[item.id]);

  let text = '🔒 PHONE SECURITY CHECKLIST\n\n';
  text += `✅ Done (${done.length})\n`;
  done.forEach(item => {
    text += `  [x] ${item.label}\n`;
  });

  text += `\n📋 Remaining (${notDone.length})\n`;
  notDone.forEach(item => {
    text += `  [ ] ${item.label}\n`;
  });

  text += `\n📊 Progress: ${done.length}/${checklistData.length}\n`;
  text += '\nSource: https://cappy-dev.github.io/phone-security-checklist/\n';

  const completion = done.length / checklistData.length * 100;
  if (completion >= 100) {
    text += '\n🎉 All done! Great job!\n';
  }

  copyToClipboard(text);
});

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('✅ Summary copied to clipboard!');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('✅ Summary copied to clipboard!');
  } catch {
    showToast('Could not copy. Please try manually.');
  }
  document.body.removeChild(textarea);
}

// === TOAST ===

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// === UTIL ===

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// === INIT ===

render();
