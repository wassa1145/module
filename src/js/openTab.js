export const openTab = (event) => {
  if (event.target.classList.contains('tablinks')) {
    const tablinks = document.querySelectorAll('.tablinks');
    const tabs = document.querySelectorAll('.tabcontent');
    
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('tab-active');
    }

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }

    const tabId = event.target.getAttribute('id');
    console.log(tabId);
    const tab = document.getElementById(`tab-${tabId}`);
    event.target.classList.add('tab-active');
    tab.style.display = 'block';
  }
} 
